import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  constructor(private http :Http) { }
  
  getStudents(){
    return this.http.get("http://localhost:8080/api/students");
  }
}
