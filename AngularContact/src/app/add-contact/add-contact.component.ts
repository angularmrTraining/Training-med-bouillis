import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

   @ViewChild('addModal') public addModal:ModalDirective;
  constructor() {
  }
  show(){
    this.addModal.show();
  }
  hide(){
    this.addModal.hide();
  }

}
