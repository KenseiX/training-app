import {Injectable} from '@angular/core';

@Injectable()

export class LoginService{

    dummyemail = "test@email.com"
    dummypassword = "testpass"

    checklogin (email, password){
        if (email === this.dummyemail && password === this.dummypassword){
            console.log ("valid login hit")
        }
        else
        console.log ("invalid login hit")
    }

}