import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  status: boolean = false;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  toggleClass(){
    this.status =!this.status;
  }

}
