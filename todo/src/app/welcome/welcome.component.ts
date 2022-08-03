import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';

//import { AppComponent} from '../app.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
//ActivatedRoute
welcomeMessageFromService:String;
 name='';
  constructor(private route:ActivatedRoute,private service:WelcomeDataService) {

   }

  ngOnInit() {
   //console.log(this.route.snapshot.params['name']);
   this.name=this.route.snapshot.params['name'];
    }

    getWelcomeMessage()
    {
  // console.log(this.service.executeHelloWorldBeanService());
   this.service.executeHelloWorldBeanService().subscribe(
     response => this.handleSuccessfulResponse(response),
     error=>this.handleErrorResponse(error)
   );
   }
   
   getWelcomeMessageWithParameter()
   {
 // console.log(this.service.executeHelloWorldBeanService());
  this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    response => this.handleSuccessfulResponse(response),
    error=>this.handleErrorResponse(error)
  );
   }
   
    handleSuccessfulResponse(response)
    {
      this.welcomeMessageFromService=response.message;
    }
    handleErrorResponse(error)
    {
      console.log(error.message);
      this.welcomeMessageFromService=error.message;
    }
}

