import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  getProducts(){
    return this.http.get("http://localhost:8080/api/products");    
  }

}
