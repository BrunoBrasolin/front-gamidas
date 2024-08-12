import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'contas', loadComponent: () => loadRemoteModule('front-bills', './Component').then((m) => m.AppComponent) },
  { path: 'chat', loadComponent: () => loadRemoteModule('front-chat', './Component').then((m) => m.AppComponent) },
  { path: 'logs', loadComponent: () => loadRemoteModule('front-logs', './Component').then((m) => m.AppComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
