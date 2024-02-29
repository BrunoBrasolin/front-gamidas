import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatListModule, MatButtonModule, CommonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {
    this.linkBills = this.sanitizer.bypassSecurityTrustResourceUrl('http://bills.gamidas.dev.br');
    this.linkNotification = this.sanitizer.bypassSecurityTrustResourceUrl('http://notification.gamidas.dev.br');
  }

  linkBills: SafeUrl;
  linkNotification: SafeUrl;
  showingPage: boolean = false;
  iframeLink: SafeUrl | null = null;
  currentModule: string | null = null;

  onClickModule(page: string): void {
    switch (page) {
      case 'bills':
        this.currentModule = 'Contas';
        this.iframeLink = this.linkBills;
        break;
      case 'notification':
        this.currentModule = 'Notificação';
        this.iframeLink = this.linkNotification;
        break;
    }
    this.showingPage = true;
  }

  onClickButton(): void {
    this.currentModule = null;
    this.iframeLink = null;
    this.showingPage = false;
  }
}
