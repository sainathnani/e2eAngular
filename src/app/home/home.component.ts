import { Component, OnInit } from '@angular/core';
import {GetAllCoursesService} from './get-all-courses.service';
import {Courses} from '../models/Courses';
import {Banners} from '../models/Banners';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


   images: Banners[] = [];
  constructor(private getCourses: GetAllCoursesService) { }

  courses: Courses[] = [];
  ngOnInit() {
    this.getCourses.getAllCourses().subscribe(res => {
      console.log(res);
      this.courses = res;
    });

    this.getCourses.getAllBanners().subscribe(res => {
      console.log(res);
      this.images = res;
    });
  }

  constructImageUrl(imageId): String {
    return environment.constructUrl(environment.categoryImage) + imageId + environment.bannersource;
  }
}
