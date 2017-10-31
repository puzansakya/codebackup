import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  constructor(private http:Http) { }

  getCustomers(){
    return this.http.get("http://localhost:8080/api/customers");
  }
}
