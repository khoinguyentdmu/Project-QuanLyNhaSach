import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrderBookComponent } from './manage-order-book.component';

describe('ManageOrderBookComponent', () => {
  let component: ManageOrderBookComponent;
  let fixture: ComponentFixture<ManageOrderBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOrderBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
