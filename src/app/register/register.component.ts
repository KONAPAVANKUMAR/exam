import { Component, OnInit } from '@angular/core';
import { categories, Qualification, qualifications } from '../global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../app.bootstrap.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  name : any = "";
  age : any = "";
  qua : any;
  qualifications = qualifications;
  categories = categories;

  onSubmit(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.qua);

  }

  ngOnInit(): void {
  }

}
