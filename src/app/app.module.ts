import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CountryListComponent,
    CountryComponent,
    StateComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
