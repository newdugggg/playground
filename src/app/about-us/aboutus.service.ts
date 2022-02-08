import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AboutusService {
  data;
  cart = new Subject();
  constructor(private http: HttpClient) {}

  getData() {
    return [{ data: 'hi', id: 'i' }];
  }

  comFuc() {}

  setRolData(data) {
    this.cart.next(data);
  }

  getComments() {
    return this.http.get(environment.backendAPI + `comments`);
  }

  postComments(data){
    return this.http.post(environment.backendAPI + 'posts', data)
  }

}
