import { Component } from '@angular/core';
import { AuthService } from '../authentication/auth-service'; // Adjust the import path as necessary

@Component({
  selector: 'app-register',
  templateUrl: './register-component.html',
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  register(name: string, email: string, password: string) {
    this.authService.register(name, email, password).subscribe(response => {
      // Handle response
    });
  }
}
