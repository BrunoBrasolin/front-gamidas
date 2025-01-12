import { Component } from '@angular/core';
import { ButtonColors } from './bills.interface';
import { CalculatePercentageComponent } from './calculate-percentage/calculate-percentage.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { CommonModule } from '@angular/common';

enum Components {
  CalculatePercentage,
  UpdateSalary
}

@Component({
  selector: 'app-bills',
  imports: [
    CalculatePercentageComponent,
    UpdateSalaryComponent,
    CommonModule
  ],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.scss'
})
export class BillsComponent {
  buttonColors: ButtonColors = {
    calculatePercentage: "basic",
    updateSalary: "basic"
  };

  public activeComponent = Components.CalculatePercentage;
  public ComponentsType = Components;

  constructor() {
    this.buttonColors.calculatePercentage = "primary";
    this.buttonColors.updateSalary = "basic";
  }

  navigateToUpdateSalary(): void {

    this.activeComponent = Components.UpdateSalary;
    this.buttonColors.updateSalary = "primary";
    this.buttonColors.calculatePercentage = "basic";
  }

  navigateToCalculatePercentage(): void {
    this.activeComponent = Components.CalculatePercentage;
    this.buttonColors.calculatePercentage = "primary";
    this.buttonColors.updateSalary = "basic";
  }
}
