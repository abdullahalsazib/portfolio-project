import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
