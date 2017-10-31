import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getData() {    
    return this.http.get("http://localhost:8080/api/customer");    
  }

}
