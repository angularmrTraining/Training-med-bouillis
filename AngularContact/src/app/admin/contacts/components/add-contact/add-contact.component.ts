import { Component, OnInit,ViewChild,Output,EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UtilsService } from '../../../../utils.service';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact.service';
import * as _ from 'underscore';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Output()
  change = new EventEmitter();

   @ViewChild('addModal') public addModal:ModalDirective;
   contact:Contact;
   required=<any>{};
    constructor(private utilsService:UtilsService,private contactService:ContactService) {
  }
  ngOnInit() {
  this.contact=new Contact();
  }
  show(){
    this.addModal.show();
  }
  hide(){
    this.addModal.hide();
  }
addContact(){
  this.required.firstname=!this.contact.firstname;
  this.required.email= !this.contact.email ||!this.utilsService.isValidEmail(this.contact.email);

if (_.find(this.required, function(v) {
                                return v;
                            })) {
                            return;
                        }
  this.contactService.create(this.contact).subscribe(resp=>{
    this.change.emit();
    this.hide();
     swal(
      'Added!',
      'Your contact is added.',
      'success'
    )
    },error=>{
    console.log(error)
  })  
}

}
