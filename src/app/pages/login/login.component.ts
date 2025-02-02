import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { AuthCodeFlowConfig } from './login.interface';
import { filter } from 'rxjs';

@Component({
  selector: 'gamidas-Login',
  imports: [
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private readonly oauthService = inject(OAuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.oauthService.configure(AuthCodeFlowConfig);

    if (!this.oauthService.hasValidIdToken()) {
      this.oauthService.loadDiscoveryDocumentAndLogin();
      this.oauthService.events
        .pipe(filter((e) => e.type === 'token_received'))
        .subscribe((_) => this.oauthService.loadUserProfile());
    } else {
      this.router.navigate(['/']);
    }
  }
}
