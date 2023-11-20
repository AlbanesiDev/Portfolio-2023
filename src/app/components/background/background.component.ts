import { AfterViewInit, Component } from '@angular/core';
import { Gradient } from 'whatamesh';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements AfterViewInit {
  gradient = new Gradient()

  ngAfterViewInit(): void {
    this.gradient.initGradient('#gradient-canvas')
    this.play();
  }

  pause(): void {
    this.gradient.pause();
  }
  play(): void {
    this.gradient.play();
  }
}
