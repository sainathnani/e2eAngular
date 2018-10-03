import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Baseresponse} from '../models/baseresponse';
import {Queries} from '../models/queries';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }

  putContactus(contactus: Queries): Observable<Baseresponse> {
     return this.http.put<Baseresponse>('http://localhost:3010/user/contactus', contactus);
  }
}
