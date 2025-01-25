export interface Notification {
  id: number;
  recipient: string;
  subject: string;
  body: string;
  dueDate: Date;
}
