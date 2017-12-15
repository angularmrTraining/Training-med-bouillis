import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListContactComponent } from './admin/contacts/components/list-contact/list-contact.component';
import { LoginComponent } from './login/components/login.component';
import { LoginService} from './login/services/login.service';
import { HeaderComponent } from './layout//header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AddContactComponent } from './admin/contacts/components/add-contact/add-contact.component';
import { ModalModule } from "ngx-bootstrap";
import { EditContactComponent } from './admin/contacts/components//edit-contact/edit-contact.component';
import { FormsModule }   from '@angular/forms';
import { UtilsService } from './utils.service';
import { ContactService } from './admin/contacts/services/contact.service';
import { HttpModule } from '@angular/http';
import {HomeComponent}  from './admin/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListContactComponent,
    HeaderComponent,
    AddContactComponent,
    EditContactComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  entryComponents: [AddContactComponent],
  providers: [UtilsService, ContactService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
