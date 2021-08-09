import { TestBed } from '@angular/core/testing';

import { HTTPMessageService } from './http-message.service';

describe('MessageService', () => {
  let service: HTTPMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
