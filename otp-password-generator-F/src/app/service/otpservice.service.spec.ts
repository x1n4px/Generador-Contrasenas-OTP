import { TestBed } from '@angular/core/testing';

import { OTPServiceService } from './otpservice.service';

describe('OTPServiceService', () => {
  let service: OTPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OTPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
