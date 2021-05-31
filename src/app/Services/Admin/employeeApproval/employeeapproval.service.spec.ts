import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { EmployeeapprovalService } from './washerapproval.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeapprovalService', () => {
  let service: EmployeeapprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(EmployeeapprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
