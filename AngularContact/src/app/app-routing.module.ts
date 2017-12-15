import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListContactComponent}  from './admin/contacts/components/list-contact/list-contact.component';
import {HomeComponent}  from './admin/home/home.component';
import {LoginComponent}  from './login/components/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'contacts', component: HomeComponent,
  children: [
      { path: '', component: ListContactComponent }
    ] }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
