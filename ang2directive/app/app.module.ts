import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MyColor} from './directives/mycolor.directive';
import { DirectiveCompComponent } from './directive-comp/directive-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveCompComponent,
    MyColor
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
