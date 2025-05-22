import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TFG-Frontend';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    const token = this.authService.getToken();
    if (token) {
      this.authService.setToken(token);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
