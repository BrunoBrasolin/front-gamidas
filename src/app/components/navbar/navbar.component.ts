import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Module } from './navbar.interface';
import { CommonModule } from '@angular/common';

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
  public showModules: boolean = false;
  public activeModule: Module | null = null;
  public modules: Module[] = [
    { url: "", name: "Home" },
    { url: "contas", name: "Contas" },
    { url: "dalme", name: "DALME" },
    { url: "logs", name: "Logs" }
  ];

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

  }
}
