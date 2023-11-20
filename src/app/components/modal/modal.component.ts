import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataModel, Work } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent implements OnInit, OnDestroy {
  isOpenSubscription!: Subscription;
  modalOpen: boolean = false;
  dataModal: Work[] = [];
  projectId!: number;
  selectedImage!: string;

  constructor(
    private modalService: ModalService,
    private dataService: DataService,
  ) {}

  ngOnInit(){
    this.modal();
    this.getSelectId();
    this.getData(this.projectId);
  }
  ngOnDestroy(){
    this.getData(this.projectId);
  }

  modal(){
    this.isOpenSubscription = this.modalService.isOpen$.subscribe((isOpen) => {
      if (isOpen) {
        this.openModal();
      } else {
        this.closeModal();
      }
    });
  }
  getSelectId(){
    this.modalService.getSelectedId().subscribe((id) => {
      this.projectId = id;
      this.getData(this.projectId);
    });
  }
  getData(projectId: number){
    this.dataService.getData().subscribe((data: DataModel)=>{
      console.log(projectId)
      const foundWork = data.works.find((work) => work.id === projectId);
      this.dataModal = foundWork ? [foundWork] : [];
    })
  }
  openModal() {
    this.modalOpen = true;
  }
  closeModal() {
    this.modalOpen = false;
  }
  changeimage(image: string) {
    this.selectedImage = image;
  }
}

