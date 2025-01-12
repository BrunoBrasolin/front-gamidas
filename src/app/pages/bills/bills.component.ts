import { Component } from '@angular/core';
import { CalculatePercentageComponent } from './calculate-percentage/calculate-percentage.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { CommonModule } from '@angular/common';

enum Components {
  CalculatePercentage,
  UpdateSalary
}

@Component({
  selector: 'gamidas-bills',
  imports: [
    CalculatePercentageComponent,
    UpdateSalaryComponent,
    CommonModule
  ],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.scss'
})
export class BillsComponent {

  public activeComponent = Components.CalculatePercentage;
  public ComponentsType = Components;

  navigateToUpdateSalary(): void {

    this.activeComponent = Components.UpdateSalary;
  }

  navigateToCalculatePercentage(): void {
    this.activeComponent = Components.CalculatePercentage;
  }
}
