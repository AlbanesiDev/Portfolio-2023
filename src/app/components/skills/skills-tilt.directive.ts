import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Directive({
  selector: '[VanillaTilt]',
})
export class SkillsTiltDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    VanillaTilt.init(this.elRef.nativeElement, {
      max: 15,
      speed: 2000,
      scale: 0.95,
      gyroscope: true,
      glare: true,
      "max-glare": 0.45,
    });
  }
}
