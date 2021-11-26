import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ModalModule} from "ngb-modal";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modal/modal.component";
import { ModalNextComponent } from './modal-next/modal-next.component';
import { ModalRegisterComponent } from './modal-register/modal-register.component';
import { ModalEnterDataComponent } from './modal-enter-data/modal-enter-data.component';
import { ModalRegisterNextComponent } from './modal-register-next/modal-register-next.component';
import { ModalRegisterEndComponent } from './modal-register-end/modal-register-end.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalNextComponent,
    ModalRegisterComponent,
    ModalEnterDataComponent,
    ModalRegisterNextComponent,
    ModalRegisterEndComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
