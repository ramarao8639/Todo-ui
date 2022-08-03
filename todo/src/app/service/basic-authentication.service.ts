import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN='token'
export const AUTHENTICATION_USER='authenticationUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  authenticate(username, password) {
    // console.log('before Login '+this.isUserLogedIn());
    if (username == 'ramarao' && password == 'ramntr') {
      sessionStorage.setItem(AUTHENTICATION_USER, username);
      // console.log('before Login '+this.isUserLogedIn());
      return true;
    } else {
      return false;
    }
  }
  isUserLogedIn() {
    let user = sessionStorage.getItem(AUTHENTICATION_USER);
    return !(user == null)
  }



  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers }).pipe(
    map(
        data => {
          sessionStorage.setItem(AUTHENTICATION_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
      return data;
        }
      ));
  }


  executeJWTAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.post<any>(`${API_URL}/authenticate`, { username,password }).pipe(
    map(
        data => {
          sessionStorage.setItem(AUTHENTICATION_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
      return data;
        }
      ));
  }


getAuthenticatedUser()
{
  return sessionStorage.getItem(AUTHENTICATION_USER);
}

getAuthenticatedToken()
{
  if(this.getAuthenticatedUser())
  {
 return sessionStorage.getItem(TOKEN);
  }
}

  logOut() {
    sessionStorage.removeItem(AUTHENTICATION_USER)
    sessionStorage.removeItem(TOKEN)
  }




}

export class AuthenticationBean {
  constructor(private message: String) { }


}
