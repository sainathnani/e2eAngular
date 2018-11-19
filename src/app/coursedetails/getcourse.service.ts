import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses} from '../models/Courses';
import {environment} from '../../environments/environment';
import {Batches} from '../models/Batches';

@Injectable({
  providedIn: 'root'
})
export class GetcourseService {

  constructor(private http: HttpClient) { }

  getCourseById(courseId): Observable<Courses> {
    return this.http.get<Courses>(environment.constructUrl(environment.getCourseById) + courseId);
  }


  getBatchByCourse(courseId): Observable<Batches[]> {
    return this.http.get<Batches[]>(environment.constructUrl(environment.getBatchByCourse) + courseId);
  }
}
