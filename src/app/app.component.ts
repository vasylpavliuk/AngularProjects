import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts = [
    {
      info: '066 508 6936',
      logo: 'fas fa-phone-alt'
    },
    {
      info: 'vasylpavliuk007@gmail.com',
      logo: 'fas fa-envelope'
    },
    {
      info: 'Ivano-Frankivsk',
      logo: 'fas fa-map-marker-alt'
    }
  ];

}
