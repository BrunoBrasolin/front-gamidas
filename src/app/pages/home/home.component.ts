import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Module } from './home.interface';
import { HomeService } from './home.service';
import { IconComponent } from '../../components/icon/icon.component';
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { PageSubtitleComponent } from "../../components/page-subtitle/page-subtitle.component";

@Component({
  selector: 'gamidas-home',
  imports: [
    IconComponent,
    CommonModule,
    RouterModule,
    PageTitleComponent,
    PageSubtitleComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly homeService: HomeService = inject(HomeService);

  public modules: Module[] = this.homeService.getModules();
}
