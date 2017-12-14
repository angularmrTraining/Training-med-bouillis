import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListContactComponent } from './admin/contacts/components/list-contact/list-contact.component';
import { HeaderComponent } from './layout//header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AddContactComponent } from './admin/contacts/components/add-contact/add-contact.component';
import { ModalModule } from "ngx-bootstrap";
import { EditContactComponent } from './admin/contacts/components//edit-contact/edit-contact.component';
import { ShowContactComponent } from './admin/contacts/components/show-contact/show-contact.component';
import { FormsModule }   from '@angular/forms';
import { UtilsService } from './utils.service';

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
    FormsModule,
    ModalModule.forRoot()
  ],
  entryComponents: [AddContactComponent],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
