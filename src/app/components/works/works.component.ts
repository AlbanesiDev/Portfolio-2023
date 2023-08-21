import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  list = [
    {
      name: 'befaster',
      img: '/assets/images/befaster.png',
      tech: ''
    },
    {
      name: 'ecomerce',
      img: '/assets/images/befaster.png',
      tech: ''
    },
    {
      name: 'befaster',
      img: '/assets/images/befaster.png',
      tech: ''
    },
    {
      name: 'ecomerce',
      img: '/assets/images/befaster.png',
      tech: ''
    },
  ];
}
