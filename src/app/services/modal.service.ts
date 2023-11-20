import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isOpen = new Subject<boolean>();
  private selectedId = new Subject<number>();

  selectedId$ = this.selectedId.asObservable();
  isOpen$ = this.isOpen.asObservable();

  openModal(id: number) {
    this.selectedId.next(id);
    this.isOpen.next(true);
  }
  closeModal() {
    this.isOpen.next(false);
  }
  getSelectedId(): Observable<number> {
    return this.selectedId$;
  }
}
