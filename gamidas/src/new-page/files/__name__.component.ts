import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %>Service } from './<%= classify(name) %>.component.service';

@Component({
  selector: 'gamidas-<%= classify(name) %>',
  imports: [
    CommonModule
  ],
  templateUrl: './<%= classify(name) %>.component.html',
  styleUrl: './<%= classify(name) %>.component.scss'
})
export class <%= classify(name) %>Component {
  private readonly service = inject(<%= classify(name) %>Service);
}
