import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ModalModule } from "ngx-bootstrap";
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ShowContactComponent } from './show-contact/show-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ListContactComponent,
    HeaderComponent,
    AddContactComponent,
    EditContactComponent,
    ShowContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [AddContactComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
