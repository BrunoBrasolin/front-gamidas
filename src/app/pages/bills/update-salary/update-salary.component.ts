import { Component, inject } from '@angular/core';
import { BillsService } from '../bills.service';
import { FormsModule } from '@angular/forms';
import { ApiDtoInterface, PersonInterface } from '../bills.interface';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'gamidas-update-salary',
  imports: [
    FormsModule,
    ButtonComponent
],
  templateUrl: './update-salary.component.html',
  styleUrl: '../shared/styles.scss'
})
export class UpdateSalaryComponent {
  private readonly service: BillsService = inject(BillsService);
  public salary: number | null = null;
  public person: PersonInterface | null = null;
  public timer: number = 3000;

  onClickAtualizar(): void {
    if (this.salary === null || this.person === null) {
      alert('Favor colocar dados válidos!');
      return;
    }

    let dto: ApiDtoInterface = {
      salary: this.salary,
      person: this.person
    }

    this.service.UpdateSalary(dto)
      .subscribe({
        next: this.handleSuccess.bind(this),
        error: this.handleError.bind(this)
      });
  }

  handleSuccess(): void {
    alert(`Salário de ${this.person} atualizado para ${this.salary}!`);
  }

  handleError(): void {
    alert('Erro, favor contatar o Maggie Hub!');
  }
}
