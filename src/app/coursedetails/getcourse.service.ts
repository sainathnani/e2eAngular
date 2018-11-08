import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses} from '../models/Courses';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetcourseService {

  constructor(private http: HttpClient) { }

  getCourseById(courseId): Observable<Courses> {
    return this.http.get<Courses>(environment.constructUrl(environment.getCourseById) + courseId);
}
}
