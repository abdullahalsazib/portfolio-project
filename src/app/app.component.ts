import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { routeAnimations, fadeIn } from './animations/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div [@routeAnimations]>
      <router-outlet></router-outlet>
    </div>
  `,
  animations: [routeAnimations, fadeIn]
})
export class AppComponent {
  title = 'Portfolio - Abdullah Al Sazib';
}
