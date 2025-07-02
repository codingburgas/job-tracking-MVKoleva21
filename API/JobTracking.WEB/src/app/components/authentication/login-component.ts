import { Component } from '@angular/core';
import { AuthService } from '../authentication/auth-service'; // Adjust the import path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(email: string, password: string) {
    // Implement login logic
  }
}
