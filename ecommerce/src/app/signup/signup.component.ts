import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  registerform:FormGroup= new FormGroup({
    name: new FormControl(null ,[Validators.required ,Validators.maxLength(10),Validators.minLength(3)]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password : new FormControl(null,Validators.pattern('^[A-Z](0-9){1,4}')),
    repassword: new FormControl(null,Validators.pattern('^[A-Z](0-9){1,4}')),
    phone:new FormControl(null,Validators.required)


  })


  signup(formdata:FormGroup){
    console.log(formdata.value)
  }



}
