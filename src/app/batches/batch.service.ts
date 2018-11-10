import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Batches} from '../models/Batches';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { }


  getAllBatches(): Observable<Batches[]> {
    return this.http.get<Batches[]>('http://localhost:3010/batch/get/batches');
  }
}
