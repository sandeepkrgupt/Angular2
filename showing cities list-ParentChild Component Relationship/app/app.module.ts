import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './cities/city/city.component';

import { CityService} from './services/cities.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
