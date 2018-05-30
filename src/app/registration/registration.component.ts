import { Component, Input } from '@angular/core';
import {RegistrationService} from './registration.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
    @Input() name;
    email
    password
    first_name
    last_name
    confirmpassword

    constructor(private registrationService: RegistrationService, public activeModal: NgbActiveModal){

        console.log("modal created ")
    }


    //Logic behind when the confirmation button is clicked
    confirmclick(){
        this.registrationService.checklogin(this.email)
        console.log("this email is " + this.email)

        if (this.password === this.confirmpassword){
        console.log ("passwords are the same")
        let data = {email:this.email, first_name:this.first_name, last_name:this.last_name, password:this.password}
        this.registrationService.createlogin(data)// .subscribe(result => {
        }
        else
        {
        console.log("passwords are not the same")
        window.alert("passwords are incorrect");
        }
        //this.activeModal.close('Close click from confirm');
    }

    //Logic for the cancel button
    cancel() {
        this.activeModal.close('Close click from cancel');
    }

    //activeModal.close('Close click')
/*    passwordconfirm(){
        if (this.password === this.confirmpassword)
        console.log ("passwords are the same")
        else
        console.log("passwords are not the same")
    }
*/

}
