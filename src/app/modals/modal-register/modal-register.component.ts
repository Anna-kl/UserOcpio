import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalEnterDataComponent} from "../modal-enter-data/modal-enter-data.component";
import {ModalNextComponent} from "../modal-next/modal-next.component";
import {BusEvent} from "@src/app/services/busEvent";
import {AuthServices} from "@src/app/services/auth.service";
import {IResponse} from "@src/app/classes/IResponse";

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css'],
  providers: [AuthServices]
})
export class ModalRegisterComponent implements OnInit {
  public phone: string = '';
  error: boolean = false;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private event: BusEvent,
              private authService: AuthServices) {
  }

  ngOnInit(): void {
  }

  next() {
    if (this.phone) {
      if (this.phone.length === 14) {
        this.authService.sendPhone(this.phone).subscribe((res: IResponse) => {
          if (res.status.code === 200){
            this.activeModal.close();
            const modalRef = this.modalService.open(ModalEnterDataComponent);
            modalRef.componentInstance.name = 'World';
            this.event.sendPhoneModal(this.phone);
          }
        });
      }
    } else {
      this.error = true;
    }

  }

  back() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalNextComponent);
    modalRef.componentInstance.name = 'World';

  }

  getPhone($event: string) {
    if (this.checkWord($event)) {
      if (this.phone.length === 1 && ($event === '8' || $event === '7')) {
        this.phone = '+7('
      }
      if (this.phone.length === 6) {
        this.phone += ')';
      }
    } else {
      if ($event.length === 1) {
        this.phone = this.phone.substr(0, this.phone.length - 2);
      }
    }
  }

  checkWord(str: string): boolean {
    const test = str.substr(str.length - 1, 1);
    if (str.length > 1 && !isNaN(Number(str.substr(str.length - 1, 1)))){
     return true;
    }
    if (str.length === 1 && !isNaN(Number(str))){
      return true;
    }
    return  false;
  }

}
