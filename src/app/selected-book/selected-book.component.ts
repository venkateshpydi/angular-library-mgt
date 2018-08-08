import { Component, OnInit, Input, SimpleChanges, } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.css']
})
export class SelectedBookComponent implements OnInit {
@Input()  book : Book;
className : any;
  constructor() { }

  ngOnInit() {
    this.className = {'blue': this.book.code ==='book001'};
  }
  ngOnChanges(change : SimpleChanges)
  {
     
  }

}
