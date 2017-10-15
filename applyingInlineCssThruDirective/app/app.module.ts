import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FontCngHoverDirective } from './directive/font-cng-hover.directive';
import { AttrDirComponentComponent } from './attr-dir-component/attr-dir-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FontCngHoverDirective,
    AttrDirComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
