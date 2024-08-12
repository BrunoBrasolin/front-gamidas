import { Component } from '@angular/core';
import { Module } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public modules: Module[] = [
    { title: 'Contas', text: 'Módulo para cálculo de porcentagem', url: 'contas', active: true },
    { title: 'Chat', text: 'Módulo para o chat com uma IA', url: 'chat', active: true },
    { title: 'Logs', text: 'Módulo para acompanhamento dos logs das aplicações', url: 'logs', active: true },
  ]
}
