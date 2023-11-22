import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import { DataModel, Work } from 'src/app/models/data.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  public dataProjects: Work[] = [];

  constructor(
    private modalService: ModalService,
    private dataService: DataService
  ){
    this.dataService.getData().subscribe((data: DataModel) => {
      this.dataProjects = data.works;
      // this.dataStack = data.works[0].stack;
    })
  }
  openModal(id: number){
    this.modalService.openModal(id);
  }
}
