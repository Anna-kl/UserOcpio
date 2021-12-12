import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";


@Injectable()

export  class AuthServices {
  private url = environment.Uri;

  constructor(private http: HttpClient) {

  }

  register(phone: string) {
    return this.http.get(`${this.url}register/${phone}`);
  }
}
