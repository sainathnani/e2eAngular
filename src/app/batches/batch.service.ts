import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Batches} from '../models/Batches';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { }


  getAllBatches(): Observable<Batches[]> {
    return this.http.get<Batches[]>(environment.constructUrl(environment.getAllBatches));
  }
}
