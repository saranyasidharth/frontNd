import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { EmployeerequestService } from './employeerequest.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeerequestService', () => {
  let service: EmployeerequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(EmployeerequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
