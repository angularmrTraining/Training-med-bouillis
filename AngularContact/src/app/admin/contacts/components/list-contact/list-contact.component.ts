import { Component, OnInit,ViewChild,ViewContainerRef } from '@angular/core';
import { ModalDirective,ModalModule } from 'ngx-bootstrap/modal';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../models/contact';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

@ViewChild('addModal') addModal :AddContactComponent;
@ViewChild('editModal') editModal :EditContactComponent;
contacts:Contact[];
contactToEdit:Contact;
  constructor(private viewContainerRef: ViewContainerRef,private contactService:ContactService) {}
  populatecontact(){
    	this.contactService.getAll().subscribe(resp=>{
  		this.contacts=resp

  	},error=>{
  	console.log(error)
  	})
  }
  ngOnInit() {
  	this.populatecontact();
  }
  contactsChange(event){
  this.populatecontact();
  }
  editContact(contact){
  	this.contactToEdit=contact;
  	this.editModal.show();
  }
  deleteContact(id){
  swal({
  title: 'Are you sure?',
  text: 'You will not be able to recover this contact !',
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it'
}).then((result) => {
  if (result.value) {
    this.contactService.delete(id).subscribe(resp=>{
  		this.populatecontact();
  	swal(
      'Deleted!',
      'Your imaginary contact has been deleted.',
      'success'
    )
  	},error=>{
  	console.log("error",error)
  	})

  } else if (result.dismiss === 'cancel') {
    swal(
      'Cancelled',
      'Your contact is safe :)',
      'error'
    )
  }
})

  }
}
