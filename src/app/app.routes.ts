import { Routes } from '@angular/router';
import { ListingList } from './listings/listing-list/listing-list';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

export const routes: Routes = [
  { path: '', component: ListingList },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

];
