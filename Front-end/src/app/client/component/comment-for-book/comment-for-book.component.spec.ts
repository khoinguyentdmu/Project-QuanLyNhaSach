import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentForBookComponent } from './comment-for-book.component';

describe('CommentForBookComponent', () => {
  let component: CommentForBookComponent;
  let fixture: ComponentFixture<CommentForBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentForBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentForBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
