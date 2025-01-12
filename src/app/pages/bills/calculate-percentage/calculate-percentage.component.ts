import { Component } from '@angular/core';
import { BillsService } from '../bills.service';
import { FormsModule } from '@angular/forms';
import { CalculatePercentageInterface } from '../bills.interface';

@Component({
  selector: 'app-calculate-percentage',
  imports: [
    FormsModule
  ],
  templateUrl: './calculate-percentage.component.html',
  styleUrl: '../shared/styles.scss'
})
export class CalculatePercentageComponent {
  constructor(private readonly service: BillsService) { }

  public value: number | null = null;
  public apiReturn: CalculatePercentageInterface | null = null;

  onClickCalcular() {
    if (this.value === null) {
      alert('Favor inserir um valor válido para o cálculo!');
      return;
    }

    this.service.CalculatePercentage(this.value).subscribe(f => this.apiReturn = f);
  }

  onClickLimpar() {
    this.value = null;
    this.apiReturn = null;
  }
}
