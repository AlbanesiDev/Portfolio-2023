import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen: boolean = true;

  constructor() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkScreenWidth();
  }
  private checkScreenWidth(): void {
    if (window.innerWidth < 1101) {
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenuAndNavigate() {
    if (window.innerWidth < 1101) {
      setTimeout(() => {
        this.isMenuOpen = false;
      }, 840);
    } else {
      this.isMenuOpen = true;
    }
  }
}
