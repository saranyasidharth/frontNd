import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employeeBaseURL } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http : HttpClient, private router : Router) { }

  
  /* Register a employee */
  registerEmployee(user) : Observable<any>{
    return this.http.post(`${employeeBaseURL}/signup`,user, this.httpOptions);
  }
  
  /* Login a employee*/
  loginEmployee(user) : Observable<any>{
    return this.http.post(`${employeeBaseURL}/login`,user, this.httpOptions )
  }

  /* Logout a employee */
  logoutEmployee(){
    localStorage.removeItem('wjwt');
    this.router.navigate(['/home']);
  }

  /* Check if token exists */
  loggedIn(){
    return !!localStorage.getItem('wjwt')
  }

  /* Fetch Token */
  getToken(){ 
    return localStorage.getItem('wjwt')
  }


}
