import {Injectable} from '@angular/core';

@Injectable()

export class RegistrationService{

    dummyemail = "test@email.com"
    dummypassword = "testpass"

    checklogin (email){
        if (email === this.dummyemail){
            console.log ("invalid email hit (use different email)")
            window.alert("invalid email, please use a different email");
        }
        else
        console.log ("email not in use hit")
    }

    checkpassword(password){

    }
}