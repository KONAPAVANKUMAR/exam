import { Component, OnInit } from '@angular/core';
import { students } from '../global';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css','../app.bootstrap.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  students = students;

  ngOnInit(): void {
  }

}
