import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ModalModule} from "ngb-modal";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modals/modal/modal.component";
import { ModalNextComponent } from './modals/modal-next/modal-next.component';
import { ModalRegisterComponent } from './modals/modal-register/modal-register.component';
import { ModalEnterDataComponent } from './modals/modal-enter-data/modal-enter-data.component';
import { ModalRegisterNextComponent } from './modals/modal-register-next/modal-register-next.component';
import { ModalRegisterEndComponent } from './modals/modal-register-end/modal-register-end.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalNextComponent,
    ModalRegisterComponent,
    ModalEnterDataComponent,
    ModalRegisterNextComponent,
    ModalRegisterEndComponent,
    MainComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
