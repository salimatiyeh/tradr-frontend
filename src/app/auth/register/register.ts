import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service'; // <-- or 'auth.service' if you rename

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
  email = '';
  password = '';
  passwordConfirmation = '';
  message = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password, this.passwordConfirmation).subscribe({
      next: (response) => {
        this.message = 'Registered successfully!';
        console.log(response);
      },
      error: (err) => {
        this.message = 'Registration failed.';
        console.error(err);
      }
    });
  }
}
