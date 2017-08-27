import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrianglecompComponent } from './trianglecomp/trianglecomp.component'
import {Triangle} from './triangleservice/areapmeter.service';

// importing AreaCircle pipe
import {AreaCircle} from './pipes/area.pipe'
@NgModule({
  declarations: [
    AppComponent,
    TrianglecompComponent,
    AreaCircle
  ],
  imports: [
    BrowserModule
  ],
  providers: [Triangle],
  bootstrap: [AppComponent]
})
export class AppModule { }
