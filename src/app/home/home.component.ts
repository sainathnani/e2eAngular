import { Component, OnInit } from '@angular/core';
import {GetAllCoursesService} from './get-all-courses.service';
import {Courses} from '../models/Courses';
import {Banners} from '../models/Banners';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // images = [1, 2, 3].map(() => `https://picsum.photos/1500/500?random&t=${Math.random()}`);

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
}
