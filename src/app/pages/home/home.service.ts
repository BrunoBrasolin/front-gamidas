import { Injectable } from '@angular/core';
import { Module } from './home.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  protected modules: Module[] = [
    { url: "", name: "Home", icon: "" },
    { url: "contas", name: "Contas", icon: "" },
    { url: "dalme", name: "DALME", icon: "" },
    { url: "logs", name: "Logs", icon: "" }
  ];


  public getModules(): Module[] {
    return this.modules;
  }
}
