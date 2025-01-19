import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gamidas-<%= classify(name) %>',
  imports: [
    CommonModule
  ],
  templateUrl: './<%= classify(name) %>.component.html',
  styleUrl: './<%= classify(name) %>.component.scss'
})
export class <%= classify(name) %>Component {
  private readonly <%= classify(name) %>Service: <%= classify(name) %>Service = inject(<%= classify(name) %>Service);
}
