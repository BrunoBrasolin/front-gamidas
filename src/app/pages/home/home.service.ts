import { Injectable } from '@angular/core';
import { Module } from './home.interface';
import { LogsComponent } from '../logs/logs.component';
import { DalmeComponent } from '../dalme/dalme.component';
import { BillsComponent } from '../bills/bills.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  protected modules: Module[] = [
    { url: "", name: "Home", icon: "", customComponent: HomeComponent },
    { url: "contas", name: "Contas", icon: "", customComponent: BillsComponent },
    { url: "dalme", name: "DALME", icon: "", customComponent: DalmeComponent },
    { url: "logs", name: "Logs", icon: "", customComponent: LogsComponent },
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
