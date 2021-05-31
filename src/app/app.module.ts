import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { routingComponents } from './app-routing.module';

import { RecruiterComponent } from './recruiter/recruiter.component';
import { SignupComponent } from './signup/signup.component';
import { AdminAddStudentComponent } from './admin-add-student/admin-add-student.component';
import { AdminAuthServiceService } from './Services/Admin/auth/admin-auth-service.service';

import { AuthService } from './auth.service';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatCardModule } from '@angular/material/card';
import { FileUploadModule } from 'ng2-file-upload';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        HelpComponent,
        StudentComponent,
        LoginComponent,
        AdminLoginComponent,
        RecruiterComponent,
        SignupComponent,
        AdminAddStudentComponent,
        routingComponents
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatDialogModule,
        CdkTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        CdkTreeModule,
        MatIconModule,
        MatTooltipModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatTabsModule,
        FileUploadModule,
        PdfViewerModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
