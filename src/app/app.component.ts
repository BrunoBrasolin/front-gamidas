import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "design-system-gamidas";
import { HomeService } from './pages/home/home.service';

@Component({
  selector: 'gamidas-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-gamidas';
  private service: HomeService = inject(HomeService);
  public modules = this.service.getModules();
}
