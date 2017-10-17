import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StructuralCompComponent } from './structural-comp/structural-comp.component';
import { LoopDirDirective } from './directives/loop-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    StructuralCompComponent,
    LoopDirDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
