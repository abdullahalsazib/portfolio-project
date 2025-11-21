import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  email: string = 'mdsazibhossin2021@gmail.com';
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
  }
}
