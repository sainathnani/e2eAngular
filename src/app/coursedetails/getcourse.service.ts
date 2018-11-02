import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses} from '../models/Courses';

@Injectable({
  providedIn: 'root'
})
export class GetcourseService {

  constructor(private http: HttpClient) { }

  getCourseById(courseId): Observable<Courses> {
    return this.http.get<Courses>('http://localhost:3010/courseroute/course/' + courseId);
}
}
