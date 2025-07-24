import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Listing {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  getListings(): Observable<Listing[]> {
    return of([
      { id: 1, title: 'Charizard Holo – PSA 10', price: 300 },
      { id: 2, title: 'Blue-Eyes White Dragon – Mint', price: 150 },
      { id: 3, title: 'Michael Jordan Rookie Card', price: 1000 }
    ]);
  }
}
