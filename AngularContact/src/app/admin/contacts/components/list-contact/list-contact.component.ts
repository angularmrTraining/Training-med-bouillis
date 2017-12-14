import { Component, OnInit,ViewChild,ViewContainerRef } from '@angular/core';
import { ModalDirective,ModalModule } from 'ngx-bootstrap/modal';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ShowContactComponent } from '../show-contact/show-contact.component';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

@ViewChild('addModal') addModal :AddContactComponent;
@ViewChild('editModal') editModal :EditContactComponent;
@ViewChild('showModal') showModal :ShowContactComponent;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
  }
}
