export interface Notification {
  id: number | null;
  recipient: string;
  subject: string;
  body: string;
  dueDate: Date | null;
}
