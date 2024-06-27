import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../shared.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isHeaderOpen = false;
  isWideScreen = false;
  currentLanguage = 'EN';

  constructor(private sharedService: SharedService, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['en', 'de']);
    this.translate.use('en');
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.sharedService.changeLanguage(language);
    this.translate.use(language);
  }

  ngOnInit() {
    this.checkScreenWidth();
    this.sharedService.changeLanguage(this.currentLanguage);
  }

  openHeaderBar() {
    this.isHeaderOpen = !this.isHeaderOpen;
    this.checkScreenWidth()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isWideScreen = window.innerWidth > 780;
    if (this.isWideScreen) {
      this.isHeaderOpen = false;
    }
  }
}

