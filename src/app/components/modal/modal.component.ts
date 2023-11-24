import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataModel, Work } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  public isOpenSubscription!: Subscription;
  public modalOpen: boolean = true;
  public dataModal: Work[] = [];
  public projectId: number = 1;
  public selectedImage!: string;
  public config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      310: {
        spaceBetween: 8,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 4,
      },
    }
  }

  constructor(
    private modalService: ModalService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.modal();
    this.getSelectId();
    this.getData(this.projectId);
  }
  ngOnDestroy() {
    this.getData(this.projectId);
  }

  modal() {
    this.isOpenSubscription = this.modalService.isOpen$.subscribe((isOpen) => {
      if (isOpen) {
        this.modalOpen = true;
      } else {
        this.modalOpen = false;
      }
    });
  }

  closeModal() {
    this.modalOpen = false;
  }

  getSelectId() {
    this.modalService.getSelectedId().subscribe((id) => {
      this.projectId = id;
      this.getData(this.projectId);
    });
  }

  getData(projectId: number) {
    this.dataService.getData().subscribe((data: DataModel) => {
      console.log(projectId);
      const foundWork = data.works.find((work) => work.id === projectId);
      this.dataModal = foundWork ? [foundWork] : [];
    });
    console.log(this.dataModal);
  }
}
