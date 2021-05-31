import { TestBed } from '@angular/core/testing';

import { AdminstudentService } from './adminstudent.service';

describe('AdminstudentService', () => {
  let service: AdminstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
