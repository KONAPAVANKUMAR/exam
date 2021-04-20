import { Component, OnInit } from '@angular/core';
import { categories, Qualification, qualifications, Student, students } from '../global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../app.bootstrap.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  name : any = "";
  age : any = "";
  qualification : any = "";
  category : any = "";
  nationality : any = "";
  dateofbirth : any = "";
  state : any = "";
  university : any = "";
  percentage : any = "";
  yearofpassing : any = "";
  district : any = "";
  qualifications = qualifications;
  categories = categories;
  students = students;

  onSubmit(){
    
    students.push(new Student(this.name,this.age,this.qualification,this.category,this.nationality,this.dateofbirth,this.state,this.university,this.percentage,this.yearofpassing,this.district))


  }

  ngOnInit(): void {
  }

}
