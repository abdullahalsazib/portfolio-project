import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { fadeIn, scaleInCenter, bounceIn } from '../../animations/animations';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './not-found.component.html',
  animations: [fadeIn, scaleInCenter, bounceIn]
})
export class NotFoundComponent {}
