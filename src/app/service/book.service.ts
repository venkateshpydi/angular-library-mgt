import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from '../../../node_modules/rxjs/Observable';
import 'rxjs';

@Injectable()
export class BookService {
 private  books : Book[] =[
    {
   name : 'Thinking in C',
   thumbnail : '//static.lulu.com/browse/product_thumbnail.php?productId=21784839&resolution=320',
   author : 'Pydi',
   code: 'B001'
 }
 ,
  {
   name : 'Begining with C',
   thumbnail : '//static.lulu.com/browse/product_thumbnail.php?productId=21784839&resolution=320',
   author : 'Riche',
   code: 'B002'
 }];
  constructor() { }

  getBooks() : Observable<Book[]>
  {
    return Observable.of(this.books);
    //return observable.throw('Data not found');
  }

}
