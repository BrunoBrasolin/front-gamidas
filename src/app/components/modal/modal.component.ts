import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'gamidas-modal',
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  public visible: InputSignal<boolean> = input<boolean>(false);
  public close: OutputEmitterRef<void> = output<void>();

  closeModal(): void {
    this.close.emit();
  }
}
