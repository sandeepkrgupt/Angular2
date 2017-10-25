import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Dir1Directive } from './directives/dir1.directive';
import { Dir2Directive } from './directives/dir2.directive';
import { Dir3Directive } from './directives/dir3.directive';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Dir1Directive,
    Dir2Directive,
    Dir3Directive,
    Comp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
