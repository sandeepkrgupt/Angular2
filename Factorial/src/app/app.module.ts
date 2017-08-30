import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlobalcompComponent } from './globalcomp/globalcomp.component';

import {NoFactorial} from './pipe/global.pipe'

@NgModule({
  declarations: [
    AppComponent,
    GlobalcompComponent,
    NoFactorial

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
