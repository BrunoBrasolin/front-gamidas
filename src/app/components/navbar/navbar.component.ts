import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Module } from './navbar.interface';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../pages/home/home.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'gamidas-navbar',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly homeService: HomeService = inject(HomeService);
  private readonly oauthService = inject(OAuthService);
  public showModules: boolean = false;
  public activeModule: Module | null = null;
  public modules: Module[] = this.homeService.getModules();
  public userName: string | null = null;

  public toggleShowModules(): void {
    this.showModules = !this.showModules
  }

  private setActiveModule(): void {
    const currentUrl = this.router.url.split('/')[1];

    this.activeModule = this.modules.find(module => module.url === currentUrl) || null;
  }

  ngOnInit(): void {
    this.setActiveModule();

    this.router.events.subscribe(() => {
      this.setActiveModule();
    });

    const claims = this.oauthService.getIdentityClaims();
    if (claims)
      this.userName = claims['given_name']
  }
}
