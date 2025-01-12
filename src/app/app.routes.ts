import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BillsComponent } from './pages/bills/bills.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: BillsComponent, path: 'contas' }
];
