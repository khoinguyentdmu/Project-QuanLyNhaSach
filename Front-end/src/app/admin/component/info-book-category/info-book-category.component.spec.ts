import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBookCategoryComponent } from './info-book-category.component';

describe('InfoBookCategoryComponent', () => {
  let component: InfoBookCategoryComponent;
  let fixture: ComponentFixture<InfoBookCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBookCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBookCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
