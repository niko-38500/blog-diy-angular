import { TestBed } from '@angular/core/testing';

import { NewPostFormService } from './new-post-form.service';

describe('NewPostFormService', () => {
  let service: NewPostFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPostFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
