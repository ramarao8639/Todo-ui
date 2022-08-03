import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

//  isUserLogedIn : boolean=false;
  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
   // hardcodedAuthenticationService.isUserLogedIn()
  }

  
}
