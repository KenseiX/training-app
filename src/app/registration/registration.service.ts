import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { mergeMap } from 'rxjs/operator/mergeMap';

@Injectable()

export class RegistrationService{

    //dummyemail = "test@email.com"
    //dummypassword = "testpass"

    login;

    constructor (private http:Http){
    };


    checklogin (email){
        this.getlogin(email);
        
        setTimeout(() => {
            console.dir(this.login)
            if ( !this.login){
                console.log ("Email available")
            }
            else
            {
                console.log ("Email already exists")
                window.alert("Email already exists");
            }
        }, 100)
    }


    getlogin (email){
        // this.test = this.http.get(`api/${email}/getLoginData`).pipe(mergeMap(data ))
        return this.http.get(`api/${email}/getLoginData`).subscribe(data => { 
            this.login = data.json()
            console.dir(this.login)
        });
    }



    /*
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
    */
}