import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countdown';

  constructor(
    private router: Router,
    public auth: AuthService
    ) { }

  goHome(): void {
    this.router.navigate(['']);
  }
}
