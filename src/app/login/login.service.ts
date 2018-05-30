import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { mergeMap } from 'rxjs/operator/mergeMap';


@Injectable()

export class LoginService{

    login;

    constructor (private http:Http){
    };

    checklogin (email, password){
        this.getlogin(email);
        

        setTimeout(() => {
            console.dir(this.login)
            if (this.login && (email === this.login.email && password === this.login.password)){
                console.log ("valid login hit")
            }
            else
            {
                console.log ("invalid login hit")
                window.alert("Login details incorrect, please try again");
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

}