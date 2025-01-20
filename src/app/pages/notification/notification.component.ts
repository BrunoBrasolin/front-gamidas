import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.component.service';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'gamidas-Notification',
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  private readonly service: NotificationService = inject(NotificationService);
}
