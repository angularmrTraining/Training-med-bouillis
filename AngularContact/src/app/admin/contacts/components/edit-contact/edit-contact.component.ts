import { Component, OnInit,ViewChild,Output,EventEmitter,Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UtilsService } from '../../../../utils.service';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact.service';
import * as _ from 'underscore';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

@ViewChild('editModal') public editModal:ModalDirective;
@Input() editContact :Contact;
@Output()
  change = new EventEmitter();
required=<any>{};
  constructor(private contactService:ContactService,private utilsService:UtilsService) {
  }
  show(){
    this.editModal.show();
  }
  ngOnInit() {
  this.editContact=new Contact();
  }
  hide(){
    this.editModal.hide();
  }
addContact(){
  this.required.firstname=!this.editContact.firstname;
  this.required.email= !this.editContact.email ||!this.utilsService.isValidEmail(this.editContact.email);

if (_.find(this.required, function(v) {
                                return v;
                            })) {
                            return;
                        }
  this.contactService.update(this.editContact).subscribe(resp=>{
    this.change.emit();
    this.hide();
    swal(
      'Edited!',
      'Your contact is edited.',
      'success'
    )
    },error=>{
    console.log(error)
  })  
}
}
