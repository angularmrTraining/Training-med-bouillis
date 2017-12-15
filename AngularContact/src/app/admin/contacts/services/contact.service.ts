import { Injectable } from '@angular/core';
import { Contact } from '..//models/contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response,Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ContactService {
 private BASE_URL:string = 'http://localhost:4000/api';
  constructor(private http:Http) { }
  public getAll():Observable<Contact[]>{
    return this.http.get(`${this.BASE_URL}/contacts`)
      .map((res: Response) => {
        return res.json();
      });
  }
    public create(contact: Contact): Observable<string> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
    	let options = new RequestOptions({ headers: headers });
        return this.http.post(`${this.BASE_URL}/contacts`, contact,options)
          .map((res: Response) => {
            return res.json();
          });
      }
        public update(contact: Contact): Observable<string> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
    	let options = new RequestOptions({ headers: headers });
        return this.http.put(`${this.BASE_URL}/contacts/${contact._id}`, contact,options)
          .map((res: Response) => {
            return res.json();
          });
      }
      public delete(id): Observable<string> {
        return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
          .map((res: Response) => {
            return res.json();
          });
      }

}
