import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css', '../../assets/css/prism-okaidia.css', '../../assets/css/custom.min.css']
})
export class HelpComponent implements OnInit {

	constructor() {}

	ngOnInit(): void {
	}
	
	full_name = "";
	email = "";
	message = "";

	send_message() {
		alert(this.full_name);
	}
}
