import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ModalModule} from "ngb-modal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {ModalComponent} from "./modals/modal/modal.component";
import {MainComponent} from './components/main/main.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {LogoTenComponent} from "./components/logo/logo.component";
import {RouterModule} from "@angular/router";
import {ModalRegisterComponent} from "./modals/modal-register/modal-register.component";
import {BusEvent} from "@src/app/services/busEvent";
import {CommonModule} from "@angular/common";
import {ModalEnterDataComponent} from "@src/app/modals/modal-enter-data/modal-enter-data.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LogoTenComponent,
    ModalComponent,
    ModalRegisterComponent,
    ModalEnterDataComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ModalModule,
    RouterModule,
    SlickCarouselModule
  ],
  providers: [BusEvent],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule {
}
