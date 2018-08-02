import { Component } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = 'Place Holder';
   books : Book[] =[
     {
    name : 'Thinking in C',
    thumbnail : '//static.lulu.com/browse/product_thumbnail.php?productId=21784839&resolution=320',
    author : 'Pydi',
    code: 'PV'
  }
  ,
   {
    name : 'Begining with C',
    thumbnail : '//static.lulu.com/browse/product_thumbnail.php?productId=21784839&resolution=320',
    author : 'Riche',
    code: 'C002'
  }];
   
  onBookSelected(data : Book)
  {
    console.log(data);
  }

  checkName()
  {
    console.log(this.name);
  }
}