import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ButtonComponent } from "./components/button/button.component";

@Component({
  selector: 'gamidas-root',
  imports: [RouterOutlet, NavbarComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-gamidas';

  alerta(): void {
    alert('Hello, World!');
  }
}
