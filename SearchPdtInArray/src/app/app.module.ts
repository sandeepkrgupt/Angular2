import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchCompComponent } from './search-comp/search-comp.component';

// All Imported Modules
import {FormsModule} from '@angular/forms';
import {SearchPdt} from './pipe/search.pipe';
import {LimitPipe} from './pipe/limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchCompComponent,
    SearchPdt,
    LimitPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
