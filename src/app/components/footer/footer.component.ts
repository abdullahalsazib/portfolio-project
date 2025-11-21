import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { fadeIn, fadeInUp, fadeInRight, fadeInLeft, staggerFadeIn } from '../../animations/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  animations: [fadeIn, fadeInUp, fadeInRight, fadeInLeft, staggerFadeIn]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
