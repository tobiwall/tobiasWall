import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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

    //Use english as basic language
    this.translate.use('en');

    // adjust language to browser language

    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang && browserLang.match(/en|de/) ? browserLang : 'en');
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

