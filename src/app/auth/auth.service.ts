import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(email: string, password: string, passwordConfirmation: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, {
      user: { email, password, password_confirmation: passwordConfirmation }
    });
  }

  login(email: string, password: string, options = {}): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/sign_in`, {
      user: { email, password }
    }, options);
  }

  getAuthHeaders() {
    const token = localStorage.getItem('token')
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  }

}
