import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {User} from '../models/user.model';
import * as _ from 'underscore';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

this.router= Router;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  required=<any>{};
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  	this.user=new User();
  }
testLogin(){
  this.required.username=!this.user.username;
  this.required.password= !this.user.password;

if (_.find(this.required, function(v) {
                                return v;
                            })) {
                            return;
                        }
	this.loginService.testLogin(this.user).then(resp=>{
		this.router.navigateByUrl('/contacts');
	})
	.catch(err=>{
	swal(
      'bad credentials',
      '',
      'error'
    )
	})
}
}
