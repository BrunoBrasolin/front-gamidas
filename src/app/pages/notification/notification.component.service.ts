import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from './notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly API_URL: string = "https://api.gamidas.dev.br/notification";

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.API_URL}`);
  }

  postPutNotification(notification: Notification): Observable<boolean> {
    if (notification.id)
      return this.http.put<boolean>(`${this.API_URL}/${notification.id}`, { notification: notification });
    else
      return this.http.post<boolean>(`${this.API_URL}`, { notification: notification });
  }

  deleteNotification(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/${id}`);
  }
}
