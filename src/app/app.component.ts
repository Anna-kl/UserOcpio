import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalManager} from "ngb-modal";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modals/modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'UserOcpio';

  @ViewChild('myModal') myModal: any;
  private modalRef: any;
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit(): void {
this.open();
  }
}
