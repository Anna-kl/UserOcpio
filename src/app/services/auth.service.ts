import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { IResponse } from "../classes/IResponse";

@Injectable()

export class AuthServices {
  private url = environment.Uri + 'auths/';

  constructor(private http: HttpClient) {

  }

  register(phone: string) {
    return this.http.get(`${this.url}register/${phone}`);
  }

  sendPhone(phone: string): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.url}code?phone=${phone}`);
  }
}
