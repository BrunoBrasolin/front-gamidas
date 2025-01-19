import { Routes } from '@angular/router';
import { HomeService } from './pages/home/home.service';

const homeService = new HomeService();
export const routes: Routes = homeService.getRoutes();
