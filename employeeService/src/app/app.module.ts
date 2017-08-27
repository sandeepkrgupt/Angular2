import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import {empSalary} from './addgetempService/addgetEmp.service'

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [empSalary],
  bootstrap: [AppComponent]
})
export class AppModule { }
