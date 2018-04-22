import { Component } from '@angular/core';
import {RegistrationService} from './registration.service';

@Component({
  selector: 'registration-root',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

    email
    password
    confirmpassword

    constructor(private registrationService: RegistrationService){

    }

    confirmclick(){
        this.registrationService.checklogin(this.email)
        console.log("this email is " + this.email)

    }

    confirmpassowrd(){
        if (this.password === this.confirmpassword)
        console.log ("passwords are the same")
    }


}