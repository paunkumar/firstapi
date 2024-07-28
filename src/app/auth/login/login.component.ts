import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APICommon } from 'src/app/interface/commonapi.interface';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!:FormGroup;
  localStored: any;
  error_msg: any;
  constructor(private fb:FormBuilder, private login:RegisterService, private localstorage:LocalstorageService, private router:Router){}
  ngOnInit(){
    this.loginform = this.fb.group({
      email:['paun@gmail.com', [Validators.required, Validators.email]],
      password:['123',[Validators.required]]
    });
  }
  onSubmit(){
    this.login.loginUser(this.loginform.value).subscribe({
      next:(response:APICommon)=>{
        console.log('seesion',response.data.session.session_token);
          //let s= this.localstorage.setItem('key', response.data.seesion.session_token);
          this.localstorage.saveData('session',response.data.session.session_token);
          this.localstorage.saveData('api-response', JSON.stringify(response.data))
          this.router.navigateByUrl('/dashboard');
      },
      error:(response:APICommon)=>{
        //this.error_msg=response.data.message;
      }
    })
  }
  get f():{[key:string]:AbstractControl}{
    return this.loginform.controls;
  }
}
