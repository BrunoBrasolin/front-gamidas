import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BillsComponent } from './pages/bills/bills.component';
import { DalmeComponent } from './pages/dalme/dalme.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: BillsComponent, path: 'contas' },
  { component: DalmeComponent, path: 'dalme' }
];
