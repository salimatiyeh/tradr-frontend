// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// export interface Listing {
//   id: number;
//   title: string;
//   price: number;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ListingService {
//   private apiUrl = 'http://localhost:3000/listings';

//   constructor(private http: HttpClient) {}

//   // Fetch all listings
//   getListings(): Observable<any> {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
//     return this.http.get(this.apiUrl, { headers });
//   }

//   // Fetch a single listing by ID
//   getListing(id: number): Observable<any> {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
//     return this.http.get(`${this.apiUrl}/${id}`, { headers });
//   }
// }

// src/app/listings/listing.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Listing {
  id?: number;                // backend will fill this in
  title: string;
  description: string;
  price: number;
  category: string;
  condition: 'New' | 'Like New' | 'Used';
  acceptingTrades: boolean;
  images?: string[];          // array of image URLs
}

@Injectable({ providedIn: 'root' })
export class ListingService {
  private apiUrl = 'http://localhost:3000/listings';

  constructor(private http: HttpClient) {}

  /** Fetch all listings */
  getListings(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(this.apiUrl, { headers });
  }

  /** Fetch a single listing by ID */
  getListing(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(`${this.apiUrl}/${id}`, { headers });
  }

  /** Create a new listing */
  createListing(data: Listing): Observable<Listing> {
    const token = localStorage.getItem('token')!;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    // wrap your data in { listing: ... } if your Rails controller expects params[:listing]
    return this.http.post<Listing>(this.apiUrl, { listing: data }, { headers });
  }
}
