import { ThrowStmt } from "@angular/compiler";

export interface Qualification {
    name : String;
    allow : number;
}

export const qualifications : Qualification[] = [
    {name : 'qualification1',allow : 1},
    {name : 'qualification2',allow : 0},
    {name : 'qualification3',allow : 1},
    {name : 'qualification4',allow : 0},
    {name : 'qualification5',allow : 1},
]

export const categories : String[] = [
    'category1',
    'category2',
    'category3'
]

export class Student {
    name : String = '';
    age : String = '';
    qualification:String = '';
    category:String = '';
    nationality:String = '';
    dateofbirth:String = '';
    state:String = '';
    university:String = '';
    percentage:String = '';
    yearofpassing:String = '';
    district:String = '';
    constructor(name:String,age:String,qualification:String,category:String,nationality:String,dateofbirth:String,state:String,university:String,percentage:String,yearofpassing:String,district:String){
        this.name = name;
        this.age = age;
        this.qualification = qualification;
        this.nationality = nationality;
        this.dateofbirth = dateofbirth;
        this.state = state;
        this.university = university;
        this.percentage = percentage;
        this.yearofpassing = yearofpassing;
        this.district = district;
    }
}

export const students : Student[] = []