import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { AppleComponent } from './fruits/apple/apple.component';
import { LemonComponent } from './fruits/lemon/lemon.component';




@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    AppleComponent,
    LemonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
