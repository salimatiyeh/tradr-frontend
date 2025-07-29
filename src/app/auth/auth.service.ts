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

  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    // Perform DELETE request to sign the user out.  If the backend responds with
    // no content, Angular will handle the empty body gracefully.
    return this.http.delete(`${this.apiUrl}/users/sign_out`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
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
