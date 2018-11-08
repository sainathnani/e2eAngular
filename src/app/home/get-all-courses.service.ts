import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses} from '../models/Courses';
import {Banners} from '../models/Banners';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetAllCoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(environment.constructUrl(environment.getAllCourses));
  }

  getAllBanners(): Observable<Banners[]> {
    return this.http.get<Banners[]>(environment.constructUrl(environment.getAllBanners) + environment.bannersource);
  }
}
