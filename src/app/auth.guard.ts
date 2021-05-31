import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private _auth:AuthService, private _router:Router) { }

  	canActivate():boolean {
		  return true;
	  	// if (this._auth.logged_in()) return true;
	  	// else
	  	// {
	  	// 	this._router.navigate(['student']);
	  	// 	return false;
	  	// }
  	}
}