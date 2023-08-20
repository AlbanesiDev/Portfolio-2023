import { Component, OnInit } from '@angular/core';
import { DataModel } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  links: any[] = [];
  background: string | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getDataContact();
  }

  getDataContact() {
    this.dataService.getData().subscribe((data: DataModel) => {
        if (data.contact[1]?.links) {
          this.links = data.contact[1].links;
          this.background = data.contact[0].background;
        }
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
