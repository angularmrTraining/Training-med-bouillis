import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UtilsService } from '../../../../utils.service';
import {Contact} from '../../models/contact';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

   @ViewChild('addModal') public addModal:ModalDirective;
   contact:Contact;
   required=<any>{};
    constructor(private utilsService:UtilsService) {
  }
  ngOnInit() {
  this.contact=new Contact();;
  }
  show(){
    this.addModal.show();
  }
  hide(){
    this.addModal.hide();
  }
addContact(){
console.log(this.contact)
  this.required.firstname=!this.contact.firstname;
  this.required.email= !this.contact.email ||!this.utilsService.isValidEmail(this.contact.email);

}

}
