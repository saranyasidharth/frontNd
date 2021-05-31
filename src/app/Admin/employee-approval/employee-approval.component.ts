import { Component, OnInit } from '@angular/core';
import { EmployeeapprovalService } from 'src/app/Services/Admin/employeeApproval/employeeapproval.service';

@Component({
  selector: 'app-employee-approval',
  templateUrl: './employee-approval.component.html',
  styleUrls: ['./employee-approval.component.css']
})
export class EmployeeApprovalComponent implements OnInit {

  employee=[];
  constructor(private _employeeApprovalService : EmployeeapprovalService) { }

  ngOnInit() {
    this.employee=[];
    this._employeeApprovalService.getUnapprovedEmployee()
        .subscribe(
          res => this.employee = res,
          err => console.log(err)
        )
  }

  updateEmployee(id) {
    this._employeeApprovalService.updateEmployee(id)
      .subscribe(
        res => {
          console.log(res),
          this.ngOnInit()
        },
        err => console.log(err) 
      )
  }

  rejectEmployee(id) {
    this._employeeApprovalService.rejectEmployee(id)
    .subscribe(
      res => {
        console.log(res),
        this.ngOnInit()
      },
      err => console.log(err) 
    )
  }

}
