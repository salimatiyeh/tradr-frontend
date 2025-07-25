// src/app/auth/login/login.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        const token = res.token; // This matches the backend change we made
        localStorage.setItem('token', token);
        this.message = 'Login successful!';
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.message = 'Login failed.';
        console.error(err);
      }
    });
  }

}
