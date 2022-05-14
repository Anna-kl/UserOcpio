import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class BusEvent {
  private phone = new BehaviorSubject<string|null>(null);

  sendPhone = this.phone.asObservable();

  constructor() {}

  sendPhoneModal(phone: string){
    this.phone.next(phone);
  }
}
