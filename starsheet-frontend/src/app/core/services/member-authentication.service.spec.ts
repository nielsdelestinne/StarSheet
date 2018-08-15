import { TestBed, inject } from '@angular/core/testing';

import { MemberAuthenticationService } from './member-authentication.service';

describe('MemberAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberAuthenticationService]
    });
  });

  it('should be created', inject([MemberAuthenticationService], (service: MemberAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
