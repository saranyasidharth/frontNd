import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { EmployeeApprovalComponent } from './Admin/employee-approval/employee-approval.component';


import { AuthGuard } from './auth.guard';
import { AdminAddStudentComponent } from './admin-add-student/admin-add-student.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
		{
			path:'',
			component:HomeComponent
		},
		{
			path:'help',
			component:HelpComponent
		},
		{
			path:'signup',
			component:SignupComponent
		},
		{
			path:'login',
			component:LoginComponent
		},
		{
			path:'student',
			canActivate: [AuthGuard],
			component:StudentComponent
		},
 		{
			 path: 'employeeApproval',
			  component : EmployeeApprovalComponent, 
			  canActivate:[AdminGuardGuard]
		},
		{
			path:'recruiter',
			canActivate: [AuthGuard],
			component:RecruiterComponent
		},
		{
			path:'recruiter/adminaddstudent',
			component:AdminAddStudentComponent
		},
		{
			path:'recruiter/edit/:id',
			component:AdminAddStudentComponent
		},
		{
			 path :'admin',
			 component : AdminLoginComponent
		 },
		{
			path : 'adminDashboard',
			component:AdminDashboardComponent, 
			canActivate:[AdminGuardGuard],
     		 children:[
       				{
							path: 'adminHome',
							component: AdminHomeComponent, 
							canActivate:[AdminGuardGuard]
					}
	 			 ]
		}
	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { };
export const routingComponents =[ HomeComponent,LoginComponent,SignupComponent,StudentComponent,RecruiterComponent, AdminDashboardComponent, AdminHomeComponent, AdminLoginComponent];



