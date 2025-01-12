import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { ChatDto, ChatMessage, LoadingInterface, TranscriptAudioDto } from './dalme.interface';
import { ChatSender } from './dalme.enum';
import { DalmeService } from './dalme.service';

@Component({
  selector: 'gamidas-dalme',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './dalme.component.html',
  styleUrl: './dalme.component.scss'
})
export class DalmeComponent {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly service: DalmeService = inject(DalmeService);
  public loading: LoadingInterface = {
    owner: ChatSender.Chatbot,
    loading: null
  };
  private readonly userInput: FormControl = new FormControl('', [Validators.required]);
  public messages: ChatMessage[] = [];
  public chatForm: FormGroup = this.formBuilder.group({
    userInput: this.userInput
  });
  public isRecording: boolean = false;

  async toggleRecording(): Promise<void> {
    if (!this.isRecording) {
      this.isRecording = true;

      try {
        await this.service.startRecording();
      }
      catch {
        this.addMessage(ChatSender.Chatbot, 'Ocorreu um erro na gravação do seu áudio.');
      }

    } else {
      this.isRecording = false;

      const audioBlob = await this.service.stopRecording();

      if (!audioBlob) {
        this.addMessage(ChatSender.Chatbot, 'Não entendi, poderia repetir?');
        return;
      }

      this.setUserLoading(true);

      this.service.transcriptAudio(audioBlob)
        .pipe(finalize(() => {
          this.setUserLoading(false);
        }))
        .subscribe((result: TranscriptAudioDto) => {
          if (!result.message) {
            this.addMessage(ChatSender.User, "");
            this.addMessage(ChatSender.Chatbot, 'Não entendi, poderia repetir?');
            return;
          }

          this.sendUserMessage(result.message);
        });
    }
  }

  public handleMessageSent(): void {
    const userMessage = this.userInput.value;

    if (userMessage == null || userMessage == "") {
      alert("Favor informar uma mensagem.");
      return;
    }

    this.sendUserMessage(userMessage);
  }

  private sendUserMessage(message: string) {

    try {
      this.userInput.setValue("");

      this.addMessage(ChatSender.User, message);
      this.setBotLoading(true);

      const dto: ChatDto = {
        message: message,
        language: "portuguese"
      }

      this.service.sendUserMessage(dto)
        .pipe(finalize(() => {
          this.setBotLoading(false);
        }))
        .subscribe({
          next: (result: ChatDto) => {
            if (!result.message) {
              this.handleErrorMessage();
              return;
            }

            this.setBotLoading(false);
            this.addMessage(ChatSender.Chatbot, result.message);
          },
          error: () => {
            this.handleErrorMessage();
          }
        });
    }
    catch {
      this.addMessage(ChatSender.Chatbot, "Ocorreu um erro, poderia tentar novamente?");
      this.setBotLoading(false);
    }
  }

  private setBotLoading(loading: boolean | null): void {
    this.loading = {
      owner: ChatSender.Chatbot,
      loading: loading
    }
  }

  private setUserLoading(loading: boolean | null): void {
    this.loading = {
      owner: ChatSender.User,
      loading: loading
    }
  }

  private addMessage(sender: ChatSender, message: string): void {
    this.messages.push({ sender, message });
    setTimeout(() => {
      document.querySelector("#chatEnd")?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 1);
  }

  private handleErrorMessage(): void {
    this.addMessage(ChatSender.Chatbot, "Não estou funcionando no momento, favor acionar o suporte 😔");
  }
}
