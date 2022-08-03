import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorld 
{
  constructor(public message:String)
  {}
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private httpRequest:HttpClient
  ) {

  }
  executeHelloWorldBeanService() {
    return this.httpRequest.get<HelloWorld>(`${API_URL}/hello-world-bean`);
  }
  executeHelloWorldBeanServiceWithPathVariable(name) {
   return this.httpRequest.get<HelloWorld>(`${API_URL}/hello-world/${name}`);
  }
}
