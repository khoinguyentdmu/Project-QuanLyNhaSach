import { TestBed } from '@angular/core/testing';

import { BookCategoryApiService } from './book-category-api.service';

describe('BookCategoryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookCategoryApiService = TestBed.get(BookCategoryApiService);
    expect(service).toBeTruthy();
  });
});
