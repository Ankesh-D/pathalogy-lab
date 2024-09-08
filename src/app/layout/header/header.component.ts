import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }
  onLogout(): void {
    // Implement your logout logic here
    // For example, clear user data and redirect to login page
    // this.authService.logout();
    this.router.navigate(['/login']);
  }
}
