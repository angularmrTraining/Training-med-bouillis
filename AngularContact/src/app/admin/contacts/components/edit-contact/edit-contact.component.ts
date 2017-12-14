import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

@ViewChild('editModal') public editModal:ModalDirective;
  constructor() {
  }
  show(){
    this.editModal.show();
  }
  ngOnInit() {
  }
  hide(){
    this.editModal.hide();
  }

}
