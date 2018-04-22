import { Component } from '@angular/core';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    email
    password

    loginclick(){
        console.log("this is your email" + this.email)
    }

    registerclick(){
        console.log("This is your password" + this.password)
    }


    print() {
        console.log(this.email)
        console.log(this.password)
    }

}