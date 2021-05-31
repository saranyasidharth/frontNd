import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeapprovalService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  /* Get list of unapproved employees */
  getUnapprovedEmployee() : Observable<any> {
    return this.http.get(`${adminBaseURL}/employee`);
  }

  /* Approve a employee */
  updateEmployee(id) : Observable <any> {
    return this.http.put(`${adminBaseURL}/employee/${id}`, this.httpOptions);
  }

  /* Delete/Reject a employee  */
  rejectEmployee(id) : Observable <any> {
    return this.http.delete(`${adminBaseURL}/employee/${id}`)
  }

  /* get count of employees to display on dashboard */
  countEmployee() : Observable <any >{
    return this.http.get(`${adminBaseURL}/countEmployee`);
  }

  
}
