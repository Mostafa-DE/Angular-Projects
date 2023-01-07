import { TestBed } from '@angular/core/testing';

import { PhotoFetchingService } from './photo-fetching.service';

describe('PhotoFetchingService', () => {
  let service: PhotoFetchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoFetchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
