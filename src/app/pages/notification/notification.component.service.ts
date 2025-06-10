import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from './notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly http: HttpClient = inject(HttpClient);

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>("https://api.gamidas.dev.br/notification");
  }
}
