import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

export interface Listing {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ListingService {
 private apiUrl = 'http://localhost:3000/listings';

 constructor(private http: HttpClient, private auth: AuthService) {}

 getListings(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
