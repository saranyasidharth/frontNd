import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentcountService {

  constructor(private http : HttpClient) { }

  /* Get count of students to display on dashboard */
  studentCount() : Observable<any> {
    return this.http.get(`${adminBaseURL}/studentCount`);
  }
}
