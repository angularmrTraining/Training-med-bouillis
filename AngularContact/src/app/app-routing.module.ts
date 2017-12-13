import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListContactComponent}  from './list-contact/list-contact.component';
const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ListContactComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  declarations: []
})
export class AppRoutingModule { }
