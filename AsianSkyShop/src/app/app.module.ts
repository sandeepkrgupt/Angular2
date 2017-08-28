import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
// default it creates like below
//import { AddNewProductsComponent } from '../src/app/add-new-products/add-new-products.component';
// change to below path
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
