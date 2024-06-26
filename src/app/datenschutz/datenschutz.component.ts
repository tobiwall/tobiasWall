import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TranslateModule],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {

}
