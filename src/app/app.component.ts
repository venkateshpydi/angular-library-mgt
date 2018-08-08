import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Book } from './models/book.model';
import { Country } from './models/country.model';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('bName') bookName : ElementRef;
  name : string = 'Place Holder';
  books : Book[];
  constructor(private bookService : BookService){}
  ngOnInit(){
    this.bookService.getBooks().subscribe( 
      (books: Book[])=> {  this.books = books; },
      (err : any) => { console.log(err); }
     );
  }
 countries : Country[] = [
    {
        name : "Afghanistan",
        code : "AF"
    },
    {
        name : "Albania",
        code : "AL"
    },
    {
      name : "Algeria",
      code : "DZ"
    },
    {
      name : "American Samoa",
      code : "AS"
    },
    {
      name : "India",
      code : "In"
    },
    {
      name : "United States of America",
      code : "USA"
    }
];
selectedBook : Book ;

  onBookSelected(data : Book)
  {
    console.log(data);
    this.selectedBook = data;
    console.log(this.bookName.nativeElement.value);
  }

  checkName(element : HTMLInputElement)
  {
   // console.log(this.name);
    console.log(element.value);
  }
}