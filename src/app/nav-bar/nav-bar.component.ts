import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css', '../../assets/css/prism-okaidia.css', '../../assets/css/custom.min.css']
})
export class NavBarComponent implements OnInit {

	constructor(private _auth:AuthService, private _router:Router) { }

	ngOnInit(): void {
	}

	logged_in = this._auth.logged_in();

	log_out()
	{
		this._auth.log_out();
	}

	go_to_home_page()
	{
		console.log(this._auth.user.type);
		if(this._auth.user.type === "") this._router.navigate(['']);
		else this._router.navigate([this._auth.user.type]);
	}
}
