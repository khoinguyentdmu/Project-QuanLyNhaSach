import { TestBed } from '@angular/core/testing';

import { BookApiService } from './bookapi.service';

describe('BookapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookApiService = TestBed.get(BookApiService);
    expect(service).toBeTruthy();
  });
});
