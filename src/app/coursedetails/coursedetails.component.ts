import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetcourseService} from './getcourse.service';
import {Courses} from '../models/Courses';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss']
})
export class CoursedetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private getCourseService: GetcourseService) { }
  course: Courses = null;
  ngOnInit() {
    this.getCourse();
  }

  getCourse(): void {
    const id = this.route.snapshot.paramMap.get('courseId');
    console.log(id);
    this.getCourseService.getCourseById(id.split('-')[1]).subscribe(res => {
      this.course =  res;
      console.log(this.course);
    });
  }
  constructImageUrl(imageId): String {
    return environment.constructUrl(environment.categoryImage) + imageId + environment.fssource;
  }

}
