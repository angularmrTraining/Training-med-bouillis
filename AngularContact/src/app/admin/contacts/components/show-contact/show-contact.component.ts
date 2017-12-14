import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

@ViewChild('showModal') public showModal:ModalDirective;
  constructor() {
  }
  show(){
    this.showModal.show();
  }
  ngOnInit() {
  }
  hide(){
    this.showModal.hide();
  }


}
