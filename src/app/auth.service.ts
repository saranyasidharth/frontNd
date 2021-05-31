import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user = {
  		type: "",
  		username: "",
  		password: ""
  	};

	constructor(private _router:Router) { } //private http:HttpClient

	login(user) {
		// return this.http.post<any>("http://localhost:3000/login", user);

		this.user = user;

		console.log('Authentication Successful');
		return 1
	}

	logged_in()
	{
		return !!localStorage.getItem('token');
	}

	log_out()
	{
		console.log('Logging out');

		this.user = {
	  		type: "",
	  		username: "",
	  		password: ""
	  	};

	  	localStorage.removeItem('token');
	  	localStorage.clear();

	  	this._router.navigate(['']);

	  	return 1;
	}
}
