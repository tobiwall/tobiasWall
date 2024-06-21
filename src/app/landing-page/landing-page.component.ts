import { Component } from '@angular/core';
import { HeaderComponent } from '../share/header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  email: string = 'info@tobias-wall.de'
}
