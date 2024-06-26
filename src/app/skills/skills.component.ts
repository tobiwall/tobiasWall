import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
declare var AOS: any;
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {
  ngOnInit(): void {
      AOS.init();
  }
}
