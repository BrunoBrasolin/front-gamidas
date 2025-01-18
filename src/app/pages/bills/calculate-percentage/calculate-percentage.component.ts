import { Component, inject } from '@angular/core';
import { BillsService } from '../bills.service';
import { FormsModule } from '@angular/forms';
import { CalculatePercentageInterface } from '../bills.interface';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'gamidas-calculate-percentage',
  imports: [
    FormsModule,
    ButtonComponent
],
  templateUrl: './calculate-percentage.component.html',
  styleUrl: '../shared/styles.scss'
})
export class CalculatePercentageComponent {
  private readonly service: BillsService = inject(BillsService);
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
