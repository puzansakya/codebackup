import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title;
  students = [];
  columns = [];
  constructor(public studentService: StudentService) {
    this.title = "Student List."
  }

  ngOnInit() {
    this.columns = [
      { prop: 'ID' },
      { name: 'Name' },
      { name: 'Email' },
      { name: 'Contact no' },
      { name: 'Created date' }
    ];
    this.studentService.getStudents().subscribe(data => this.students = data.json());
  }

}
