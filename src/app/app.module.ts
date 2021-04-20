import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { NotqualifiedComponent } from './notqualified/notqualified.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StudentsComponent,
    NotqualifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
