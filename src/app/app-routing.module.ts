import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotqualifiedComponent } from './notqualified/notqualified.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '' , component  : RegisterComponent },
  { path: 'students' , component  : StudentsComponent },
  { path: 'notqualified' , component  : NotqualifiedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
