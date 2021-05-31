import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/css/prism-okaidia.css', '../../assets/css/custom.min.css']
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
	}

	students = 481;
	recruiters = 34;
}
