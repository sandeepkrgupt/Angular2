import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// custom services
import {areaservice} from './services/area.service';
import {pmeterservice} from './services/perimeter.service';
import{triangleap} from './services/triangle.service';

// this is component
import { TrianglecompComponent } from './trianglecomp/trianglecomp.component'

@NgModule({
  declarations: [
    AppComponent,
    TrianglecompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [triangleap,areaservice,pmeterservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
