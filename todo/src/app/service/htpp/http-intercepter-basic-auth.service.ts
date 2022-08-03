import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService  implements HttpInterceptor{

  constructor(
    private basicAuthenticationService:BasicAuthenticationService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//    let username='ramarao'
  //  let password='ramntr'
    //let basicHeaderString='Basic'+' '+ window.btoa(username + ':' + password);
    let basicHeaderString=this.basicAuthenticationService.getAuthenticatedToken()
    let username=this.basicAuthenticationService.getAuthenticatedUser()
 
 if(basicHeaderString && username)
    {
      req=req.clone({
        setHeaders : {
          Authorization: basicHeaderString
        }
      })

    }
     return next.handle(req);
    }


}
