import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MyColor} from './directives/mycolor.directive';
import { DirectiveCompComponent } from './directive-comp/directive-comp.component';
import { MyDirType2Directive } from './directives/my-dir-type2.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveCompComponent,
    MyColor,
    MyDirType2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
