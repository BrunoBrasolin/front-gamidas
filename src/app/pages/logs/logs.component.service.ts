import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogsInterface } from './logs.interface';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private readonly http: HttpClient = inject(HttpClient);

  getLogs(): Observable<LogsInterface[]> {
    return this.http.get<LogsInterface[]>("https://api.gamidas.dev.br/logs");
  }
}
