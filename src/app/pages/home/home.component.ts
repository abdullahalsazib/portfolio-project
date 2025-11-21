import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { fadeIn, fadeInUp, fadeInDown, fadeInRight, scaleIn, bounceIn, staggerFadeIn } from '../../animations/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn, fadeInUp, fadeInDown, fadeInRight, scaleIn, bounceIn, staggerFadeIn]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
