import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeekcompComponent } from './weekcomp/weekcomp.component';

import {WeekFind} from './pipe/weekpipe.pipe';
import {CountNameChar} from './pipe/countchar.pipe'
@NgModule({
  declarations: [
    AppComponent,
    WeekcompComponent,
    WeekFind,
    CountNameChar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
