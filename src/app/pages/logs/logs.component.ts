import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LogsService } from './logs.component.service';
import { LogsInterface } from './logs.interface';

@Component({
  selector: 'gamidas-logs',
  imports: [
    CommonModule
  ],
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  private readonly logsService: LogsService = inject(LogsService);
  public logs: LogsInterface[] = [];

  ngOnInit(): void {
    this.logsService.getLogs().subscribe((data) => {
      this.logs = data;
    });
  }
}
