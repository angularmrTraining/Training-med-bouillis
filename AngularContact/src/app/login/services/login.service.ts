import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable()
export class LoginService {

  constructor() { }

  testLogin(user:User){

  	return new Promise((resolve,reject)=>{
  	if(user.username=="admin" && user.password=="admin"){
  		resolve("valid credentials");
  	}
  	else reject("bad credentials");

  	})

  }

}
