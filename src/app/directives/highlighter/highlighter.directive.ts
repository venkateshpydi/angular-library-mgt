import { Directive, OnInit, ElementRef, Renderer2, Input, OnChanges, HostBinding } from '@angular/core';
import { Book } from '../../models/book.model';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit, OnChanges {
//  private elRef : ElementRef
//   constructor(elRef : ElementRef) {
//     this.elRef = elRef;
//    }
@Input() book :Book;
@HostBinding('style.fontsize') fontsize :string;
//@HostBinding('class') fontsize :string;
constructor(private elRef : ElementRef, private renderer : Renderer2) { }
ngOnInit()
{
  console.log(this.elRef.nativeElement);
  console.log('directive intitilized');
  
 
}
 ngOnChanges()
 {
  const color = this.book.code === 'B001' ? 'yellow' : 'purple';
  //this.renderer.setStyle(this.elRef.nativeElement,'background-color', color);
  this.fontsize = this.book.code === 'B001' ? '20px' : '30px' ; 
}
}
