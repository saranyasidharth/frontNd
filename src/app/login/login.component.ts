import { Component, OnInit } from '@angular/core';
// import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { Router} from '@angular/router';
// import { faUserAlt} from '@fortawesome/free-solid-svg-icons';
// import { faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { AuthServiceService } from 'src/app/Services/Student/auth/auth-service.service';
import { AuthService } from 'src/app/Services/Employee/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selected="Student";
  emailError ='';
  passwordError ='';
  constructor(private router : Router, private _auth : AuthServiceService, private _employeeAuth: AuthService) { }

  ngOnInit(): void {
  }

   /* Show and hide password */
  showpass(x,text){
     if (x.type === "password") {
       x.type = "text";
       text.text = "Hide"
     } else {
       text.text ="Show";
       x.type = "password";
     }
  }

   /* Login the user */
  login(student){

    this.emailError =''; 
    this.passwordError='';

    if(student.value.role == 'Student'){
      let user = { email: student.value.email, password : student.value.password};
      this._auth.loginStudent(user)
      .subscribe(
        res => {
          localStorage.setItem('cjwt',res.token)
          this.router.navigate(['/student'])
        },
        err => {this.emailError =err.error.email, this.passwordError = err.error.password}
      )
    }

    if(student.value.role == 'Employee'){
      let user = { email: student.value.email, password : student.value.password};
      this._employeeAuth.loginEmployee(user)
      .subscribe(
        res => {
          localStorage.setItem('wjwt',res.token)
          this.router.navigate(['/recruiter'])
        },
        err => {this.emailError =err.error.email, this.passwordError = err.error.password}
      )
    }

     
  }

  /* Login with Google */
  googleLogin(){
    this._auth.googleLogin()
      .subscribe(
        res=>console.log(res),
        err => console.log(err)
      )
  }
 
}
