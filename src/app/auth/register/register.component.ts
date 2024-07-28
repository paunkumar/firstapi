import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APICommon } from 'src/app/interface/commonapi.interface';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  form!:FormGroup;
  submitted:boolean=false;
  constructor(private fb:FormBuilder, private signup:RegisterService){

  }
  ngOnInit(){
    this.form = this.fb.group({
        name:['', [Validators.required]],
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required]]
    });
  }
  /**accesser form value */
  get f(): {[key:string]:AbstractControl}{
    return this.form.controls;
  }
  onSubmit(){
    this.submitted=true;
    this.signup.register(this.form.value).subscribe({
      next:(response:APICommon)=>{
        alert(response.message);
      },
      error:(error)=>{
        
      }
    })

  }
}
