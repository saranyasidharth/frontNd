import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../employee/auth/auth.service';
import { adminBaseURL, studentBaseURL, employeeBaseURL } from 'src/environments/environment';
import { AdminAuthServiceService } from '../../Admin/auth/admin-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _authService : AuthServiceService, private _employeeAuth : AuthService,
              private _adminAuthService : AdminAuthServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* for all student services */
    if(req.url.startsWith(studentBaseURL)){
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization : `Bearer ${this._authService.getToken()}`
        }
      })
      return next.handle(tokenizedReq);
    }
    
    /* For all employee services */
    if(req.url.startsWith(employeeBaseURL)){
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization : `Bearer ${this._employeeAuth.getToken()}`
        }
      })
      return next.handle(tokenizedReq);
    }

    if(req.url.startsWith(adminBaseURL)){
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization : `Bearer ${this._adminAuthService.getToken()}`
        }
      })
      return next.handle(tokenizedReq);
    }


    
    
  }
}
