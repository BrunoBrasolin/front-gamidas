import { Injectable } from '@angular/core';
import { Module } from './home.interface';
import { LogsComponent } from '../logs/logs.component';
import { DalmeComponent } from '../dalme/dalme.component';
import { BillsComponent } from '../bills/bills.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  protected modules: Module[] = [
    { url: "", name: "Home", customComponent: HomeComponent },
    { url: "contas", name: "Contas", customComponent: BillsComponent },
    { url: "dalme", name: "DALME", customComponent: DalmeComponent },
    { url: "logs", name: "Logs", customComponent: LogsComponent },
    { url: "notification", name: "Notificações", customComponent: NotificationComponent },
    { url: "login", name: "Login", customComponent: LoginComponent },
  ];


  public getModules(): Module[] {
    return this.modules;
  }

  getRoutes(): Routes {
    return this.modules.map(module => ({
      path: module.url,
      component: module.customComponent
    }));
  }
}
