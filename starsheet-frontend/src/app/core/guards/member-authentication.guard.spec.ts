import { TestBed, async, inject } from '@angular/core/testing';

import { MemberAuthenticationGuard } from './member-authentication.guard';

describe('MemberAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberAuthenticationGuard]
    });
  });

  it('should ...', inject([MemberAuthenticationGuard], (guard: MemberAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
