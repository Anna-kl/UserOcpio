import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalNextComponent} from "../modal-next/modal-next.component";
import {ModalRegisterComponent} from "../modal-register/modal-register.component";

@Component({
  selector: 'app-modal-enter-data',
  templateUrl: './modal-enter-data.component.html',
  styleUrls: ['./modal-enter-data.component.css']
})
export class ModalEnterDataComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  next() {
    this.activeModal.close();
    // const modalRef = this.modalService.open(ModalEnterDataComponent);
    // modalRef.componentInstance.name = 'World';
  }

  back() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalRegisterComponent);
    modalRef.componentInstance.name = 'World';
  }


}
