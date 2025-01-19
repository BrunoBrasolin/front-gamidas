import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Module } from './home.interface';
import { HomeService } from './home.service';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'gamidas-home',
  imports: [
    IconComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly homeService: HomeService = inject(HomeService);

  public modules: Module[] = this.homeService.getModules();
}
