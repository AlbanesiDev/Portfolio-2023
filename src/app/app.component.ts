import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const sections = ['home', 'about-me', 'works', 'skills', 'contact'];

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            this.activateNavItem(id);
          }
        }
      });
    }, options);

    sections.forEach((section) => {
      const target = this.el.nativeElement.querySelector(`#${section}`);
      observer.observe(target);
    });
  }

  activateNavItem(id: string): void {
    const navLinks = this.el.nativeElement.querySelectorAll('.nav__link');

    navLinks.forEach((navLink: Element) => {
      if (navLink.getAttribute('href') === `#${id}`) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  }
}
