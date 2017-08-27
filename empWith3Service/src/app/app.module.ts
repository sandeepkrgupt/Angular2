import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// importing New Services
import {GrossSalary} from './empservice/empsalary.service';
import {empSalDA} from './empservice/empDA.service';
import {empSalTA} from './empservice/empTA.service';

import { EmpSalManagementComponent } from './emp-sal-management/emp-sal-management.component'
@NgModule({
  declarations: [
    AppComponent,
    EmpSalManagementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GrossSalary,empSalDA,empSalTA],
  bootstrap: [AppComponent]
})
export class AppModule { }
