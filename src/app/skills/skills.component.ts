import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('leftSide') leftSide!: ElementRef;
  @ViewChild('rightSide') rightSide!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (this.leftSide?.nativeElement) {
      observer.observe(this.leftSide.nativeElement);
    }

    if (this.rightSide?.nativeElement) {
      observer.observe(this.rightSide.nativeElement);
    }
  }
}
