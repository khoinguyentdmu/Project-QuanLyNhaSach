import { TestBed } from '@angular/core/testing';

import { UtilApiService } from './util-api.service';

describe('UtilApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilApiService = TestBed.get(UtilApiService);
    expect(service).toBeTruthy();
  });
});
