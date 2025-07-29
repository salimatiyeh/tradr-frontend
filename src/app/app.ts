import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgIf } from '@angular/common'
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './app.html'
})
export class App {
    constructor(private router: Router, private authService: AuthService) {}

  /**
   * Check if a token exists in local storage to determine whether the user is
   * logged in. If a token is present (truthy), the user is considered
   * authenticated.
   */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  /**
   * Logs the user out by making a call to the backend (if implemented)
   * and removing the token from local storage. Afterwards the user is
   * redirected to the login page.
   */
  logout(): void {
    try {
      this.authService.logout().subscribe({ next: () => {}, error: () => {} });
    } catch {
      // ignore sync/async issues if logout isn't defined
    }
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
