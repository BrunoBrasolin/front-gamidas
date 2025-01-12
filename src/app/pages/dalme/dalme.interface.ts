import { ChatSender } from "./dalme.enum";

export interface ChatMessage {
  sender: string;
  message: string;
}

export interface ChatDto {
  message: string;
  language: string;
}

export interface TranscriptAudioDto {
  message: string;
}

export interface LoadingInterface {
  owner: ChatSender;
  loading: boolean | null;
}
