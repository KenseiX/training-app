import { Component } from '@angular/core';
import {LoginService} from './login.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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
        this.loginService.checklogin(this.email, this.password)      
    }

    registerclick(){
        
    }


/*    print() {
        console.log(this.email)
        console.log(this.password)
    }*/

}