import { Component } from '@angular/core';
import {LoginService} from './login.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {RegistrationComponent} from './../registration/registration.component';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    email
    password

    constructor(private loginService: LoginService, private modalService: NgbModal){

    }

    loginclick(){
        this.loginService.checklogin(this.email, this.password)      
    }

    registerclick(){
        const modalRef = this.modalService.open(RegistrationComponent);
        modalRef.componentInstance.name = 'World';
    }


/*    print() {
        console.log(this.email)
        console.log(this.password)
    }*/

}