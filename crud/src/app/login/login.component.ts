import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor() {}

  loginForm!: FormGroup;

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('null', [Validators.required, Validators.email]),
      password: new FormControl('null', [Validators.required])
    });
  }

  onLogin(){
    console.log(this.loginForm.value);
  }
  login(){
 console.log(this.loginForm.value);
  }
  
  
  }
