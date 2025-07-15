import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.component.service';
import { ButtonComponent } from '../../components/button/button.component';
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { PageSubtitleComponent } from "../../components/page-subtitle/page-subtitle.component";
import { Notification } from './notification.interface';
import { ModalComponent } from "../../components/modal/modal.component";
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'gamidas-Notification',
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    PageTitleComponent,
    PageSubtitleComponent,
    ModalComponent,
    FormsModule
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  private readonly service: NotificationService = inject(NotificationService);
  public notifications: Notification[] = [];
  public modalVisible: boolean = false;
  public formData: Notification = {
    id: null,
    recipient: '',
    subject: '',
    body: '',
    dueDate: null
  };

  public ngOnInit(): void {
    this.service.getNotifications().subscribe((notifications: Notification[]) => {
      this.notifications = notifications;
    });
  }

  public onCkickButton(): void {
    this.modalVisible = true;
  }

  submitForm(): void {
    this.service.postNotification(this.formData).subscribe((response: Notification) => {
      this.modalVisible = false;
    });
  }
}
