import { Component } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    email
    password

    constructor(private loginService: LoginService){

    }

    loginclick(){
        console.log("this is your email" + this.email)
        this.loginService.checklogin(this.email, this.password)
    }

    registerclick(){
        console.log("This is your password" + this.password)
    }


    print() {
        console.log(this.email)
        console.log(this.password)
    }

}