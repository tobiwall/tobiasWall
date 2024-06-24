import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isHeaderOpen = false;
  isWideScreen = false;

  ngOnInit() {
    this.checkScreenWidth();
  }

  openHeaderBar() {
    this.isHeaderOpen = !this.isHeaderOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isWideScreen = window.innerWidth > 750;
    if (this.isWideScreen) {
      this.isHeaderOpen = false;
    }
  }
}
