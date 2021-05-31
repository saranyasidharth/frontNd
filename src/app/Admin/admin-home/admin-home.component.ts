import { Component, OnInit } from '@angular/core';
import { StudentcountService } from 'src/app/Services/Admin/studentcount/studentcount.service';
import { EmployeeapprovalService } from 'src/app/Services/Admin/employeeApproval/employeeapproval.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  /* variables */
  activeServicesCount :number;
  studentCount: number;
  employeeCount : number;
  completedordersCount : number;


  constructor(
              private _employeeService : EmployeeapprovalService,
              private _studentService : StudentcountService) { }

  ngOnInit() {
   

    this._employeeService.countEmployee()
          .subscribe(
            res => this.employeeCount = res,
            err => console.log(err)
          )

    this._studentService.studentCount()
          .subscribe(
            res => this.studentCount = res,
            err => console.log(err)
          )

  
  }

}
