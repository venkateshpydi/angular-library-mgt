import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('BookCloceked',()=>{
    it('could call the emit function on selecte property',() => {
      spyOn(component.selected, 'emit');
        
      component.bookOnClick();
      
      expect(component.selected.emit).toHaveBeenCalled();

    })
  })
});
