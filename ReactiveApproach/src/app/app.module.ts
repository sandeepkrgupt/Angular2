import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmprecComponent } from './emprec/emprec.component';


import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DoctorsComponent } from './doctors/doctors.component';
@NgModule({
  declarations: [
    AppComponent,
    EmprecComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
