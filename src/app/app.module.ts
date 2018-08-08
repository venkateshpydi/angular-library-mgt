import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HighlighterDirective } from './directives/highlighter/highlighter.directive';
import { HoverElementDirective } from './directives/hover-element/hover-element.directive';
import { Book } from './models/book.model';
import { BookService } from './service/book.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CountryListComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    SelectedBookComponent,
    HighlighterDirective,
    HoverElementDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
