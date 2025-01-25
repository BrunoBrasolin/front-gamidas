import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.component.service';
import { ButtonComponent } from '../../components/button/button.component';
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { PageSubtitleComponent } from "../../components/page-subtitle/page-subtitle.component";
import { Notification } from './notification.interface';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'gamidas-Notification',
  imports: [
    CommonModule,
    ButtonComponent,
    PageTitleComponent,
    PageSubtitleComponent,
    ModalComponent
],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  private readonly service: NotificationService = inject(NotificationService);
  public notifications: Notification[] = [];

  ngOnInit(): void {
    this.service.getNotifications().subscribe((notifications: Notification[]) => {
      this.notifications = notifications;
    });
  }
}
