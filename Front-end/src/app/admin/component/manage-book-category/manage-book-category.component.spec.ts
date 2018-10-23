import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBookCategoryComponent } from './manage-book-category.component';

describe('BookCategoryComponent', () => {
  let component: ManageBookCategoryComponent;
  let fixture: ComponentFixture<ManageBookCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBookCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBookCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
