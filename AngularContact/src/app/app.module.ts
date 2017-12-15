import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListContactComponent } from './admin/contacts/components/list-contact/list-contact.component';
import { HeaderComponent } from './layout//header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AddContactComponent } from './admin/contacts/components/add-contact/add-contact.component';
import { ModalModule } from "ngx-bootstrap";
import { EditContactComponent } from './admin/contacts/components//edit-contact/edit-contact.component';
import { FormsModule }   from '@angular/forms';
import { UtilsService } from './utils.service';
import { ContactService } from './admin/contacts/services/contact.service';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login/login.module';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListContactComponent,
    HeaderComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    LoginModule,
    ModalModule.forRoot()
  ],
  entryComponents: [AddContactComponent],
  providers: [UtilsService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
