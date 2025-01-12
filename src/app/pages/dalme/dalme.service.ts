import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatDto, TranscriptAudioDto } from './dalme.interface';

@Injectable({
  providedIn: 'root'
})
export class DalmeService {
  private readonly http: HttpClient = inject(HttpClient);
  private audioContext: AudioContext | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];


  public sendUserMessage(dto: ChatDto): Observable<ChatDto> {
    const response = this.http.post<ChatDto>(`http://localhost:8080/message`, dto);

    return response;
  }

  async startRecording() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(stream);

    this.mediaRecorder.ondataavailable = (event) => {
      this.audioChunks.push(event.data);
    };

    this.mediaRecorder.start();
  }

  stopRecording(): Promise<Blob | null> {
    return new Promise<Blob | null>((resolve) => {
      if (this.mediaRecorder && this.audioContext) {
        this.mediaRecorder!.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
          this.audioChunks = [];

          this.audioContext?.close();
          this.audioContext = null;

          resolve(audioBlob);
        };

        this.mediaRecorder.stop();
      }
    });
  }

  transcriptAudio(audioBlob: Blob) {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');

    return this.http.post<TranscriptAudioDto>('http://localhost:8080/transcript_audio', formData);
  }
}
