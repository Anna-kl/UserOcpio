import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalRegisterComponent} from "../modal-register/modal-register.component";
import {ModalRegisterNextComponent} from "../modal-register-next/modal-register-next.component";
import {BusEvent} from "@src/app/services/busEvent";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-enter-data',
  templateUrl: './modal-enter-data.component.html',
  styleUrls: ['./modal-enter-data.component.css']
})
export class ModalEnterDataComponent implements OnInit {
  public phone: string | null  = null;
  public code: FormGroup;
  public checkCode = false;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private event: BusEvent,
    private formBuilder: FormBuilder,
  ) {
    this.event.sendPhone.subscribe(res => {
      this.phone = res;
    });
    this.code = this.formBuilder.group ({
      a1: new FormControl(undefined, [Validators.max(1), Validators.required]),
      a2: new FormControl(undefined, [Validators.max(1), Validators.required]),
      a3: new FormControl(undefined, [Validators.max(1), Validators.required]),
      a4: new FormControl(undefined, [Validators.max(1), Validators.required])
    });
  }

  ngOnInit(): void {

  }

  next() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalRegisterNextComponent);
    modalRef.componentInstance.name = 'World';
  }

  back() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalRegisterComponent);
    modalRef.componentInstance.name = 'World';
  }


  onSubmitCode() {

  }

  setCell(number: number) {
      if (number === 0) {
        document?.getElementById("sms2")?.focus();
        const num = this.code.get('a1')?.value;
        if (isNaN(Number(num)))
        this.code.patchValue({'a1': ''});
    }
      if (number === 1){
        document?.getElementById("sms3")?.focus();
        const num = this.code.get('a2')?.value;
        if (isNaN(Number(num)))
          this.code.patchValue({'a2': ''});
      }
      if (number === 2) {
        document?.getElementById("sms4")?.focus();
        const num = this.code.get('a3')?.value;
        if (isNaN(Number(num)))
          this.code.patchValue({'a3': ''});
      }
    if (number === 3) {
      this.checkCode = true;
    }
  }
}
