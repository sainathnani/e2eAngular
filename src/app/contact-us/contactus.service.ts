import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Baseresponse} from '../models/baseresponse';
import {Queries} from '../models/queries';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }

  putContactus(contactus: Queries): Observable<Baseresponse> {
     return this.http.put<Baseresponse>(environment.constructUrl(environment.contactus), contactus);
  }
}
