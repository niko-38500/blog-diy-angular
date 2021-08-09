import { TestBed } from '@angular/core/testing';

import { AuthorizationsHttpService } from './authorizations-http.service';

describe('AuthorizationsHttpService', () => {
  let service: AuthorizationsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
