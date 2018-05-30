import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()

export class LoginService{

    dummyemail = "test@email.com"
    dummypassword = "testpass"

    constructor (private http:Http){
    };

    checklogin (email, password){
        this.getlogin (email);

        if (email === this.dummyemail && password === this.dummypassword){
            console.log ("valid login hit")
        }
        else
        console.log ("invalid login hit")
        window.alert("Login details incorrect, please try again");
    }


    getlogin (email){

        let test = {}

        this.http.get(`api/${email}/getLoginData`).flatMap(data => {
            console.log("Api hit");
            console.dir(data);
            return data.json();
        });


    }

}