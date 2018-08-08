import { HighlighterDirective } from './highlighter.directive';
const htmlElementDummy = new HTMLElement();
class ElementRefMock{
 nativeElement = new HTMLElement();

}

class Renderer2Mock{
  setStyle(ele : HTMLElement,porp: string, style:string){

  }

}
const elementRefMock = new ElementRefMock();
const renderMock = new Renderer2Mock();
fdescribe('HighlighterDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlighterDirective(elementRefMock, renderMock);
    expect(directive).toBeTruthy();
  });
});
