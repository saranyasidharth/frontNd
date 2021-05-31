import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeerequestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /* Get list of all pending reuqests */
  getPendingRequests() : Observable<any> {
    return this.http.get(`${employeeBaseURL}/pending`);
  }

  /* Accept order by order id */
  acceptRequest(orderId) : Observable< any> {
    return this.http.put(`${employeeBaseURL}/accept/${orderId}`, this.httpOptions);
  }

  /* Reject order by order id */
  rejectRequest(orderId) : Observable< any> {
    return this.http.put(`${employeeBaseURL}/reject/${orderId}`, this.httpOptions);
  }

  /* Update order status to in-process */
  inprocessOrder(orderId) : Observable< any> {
    return this.http.put(`${employeeBaseURL}/inprocess/${orderId}`, this.httpOptions)
  }

  /* Update order status to completedd */
  completedOrder(orderId): Observable<any> {
    return this.http.put(`${employeeBaseURL}/completed/${orderId}`, this.httpOptions)
  }
}
