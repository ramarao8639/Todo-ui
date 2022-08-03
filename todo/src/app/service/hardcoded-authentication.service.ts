import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username,password)
  {
   // console.log('before Login '+this.isUserLogedIn());
    if(username=='ramarao' && password=='ramntr')
    {
      sessionStorage.setItem('authenticationUser',username);
     // console.log('before Login '+this.isUserLogedIn());
    return true;
    }else
    {
      return false;
    }
  }
  isUserLogedIn()
  {
    let user=sessionStorage.getItem('authenticationUser');
    return !(user==null)
  }

  logOut()
  {
    sessionStorage.removeItem('authenticationUser')
  }

}
