import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../service/localstorage.service';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { APICommon } from '../interface/commonapi.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userdata:any;
  message:string= 'hello my child';
  constructor(private localstorage:LocalstorageService, private router:Router, private register:RegisterService){}
  ngOnInit(){
    let samp= this.localstorage.getData('api-response');
    let userDetail=JSON.parse(samp);
    let userId=userDetail.user._id;
    console.log('id',userId)
    this.register.getUser(userId).subscribe({
      next:(response:APICommon)=>{
        let userdata= this.userdata=response.data;
      }
    })
  }
  logout(){
    this.localstorage.removeData('session');
    this.localstorage.clearStorage();
    this.router.navigateByUrl('/');
  }
  welcomeChild(event:string){
    this.message=event;
  }
}
