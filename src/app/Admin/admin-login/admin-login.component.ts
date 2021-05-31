import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AdminAuthServiceService } from 'src/app/Services/Admin/auth/admin-auth-service.service';
import { AuthServiceService } from 'src/app/Services/Student/auth/auth-service.service';
import { AuthService } from 'src/app/Services/Employee/auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  emailError ='';
  passwordError ='';

  constructor(private router: Router,
              private _adminAuth : AdminAuthServiceService) { }

  ngOnInit(): void {
  }

  login(data){
    this.emailError='',
    this.passwordError='';
    console.log(data.value);

    this._adminAuth.loginAdmin(data.value)
    .subscribe(
      res => {
        localStorage.setItem('ajwt',res.token)
        this.router.navigate(['/adminDashboard/adminHome'])
      },
      err => {
        this.emailError = err.error.email,
        this.passwordError = err.error.password
      }
      
     /*  err => {this.emailError =err.error.email, this.passwordError = err.error.password} */
    )
  }

}
