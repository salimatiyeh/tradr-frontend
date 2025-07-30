import { Routes } from '@angular/router';
import { ListingList } from './listings/listing-list/listing-list';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ListingDetail } from './listings/listing-detail/listing-detail';
import { CreateListingComponent } from './listings/create-listing/create-listing';

export const routes: Routes = [
  { path: '', component: ListingList },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'listings/new', component: CreateListingComponent },
  { path: 'listings/:id', component: ListingDetail },
];
