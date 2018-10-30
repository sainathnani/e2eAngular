import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses} from '../models/Courses';
import {Banners} from '../models/Banners';

@Injectable({
  providedIn: 'root'
})
export class GetAllCoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>('http://localhost:3010/courseroute/courses');
  }

  getAllBanners(): Observable<Banners[]> {
    return this.http.get<Banners[]>('http://localhost:3010/file/get/allfiles/banners');
  }


}
