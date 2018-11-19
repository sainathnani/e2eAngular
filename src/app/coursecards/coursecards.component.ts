import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Courses} from '../models/Courses';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-coursecards',
  templateUrl: './coursecards.component.html',
  styleUrls: ['./coursecards.component.css']
})
export class CoursecardsComponent implements OnInit {

  constructor() { }
  @Input() course: Courses;
  ngOnInit() {
  }

  getInfo(): void {
    console.log(this.course);
  }

  constructImageUrl(imageId): String {
    return environment.constructUrl(environment.categoryImage) + imageId + environment.fssource;
  }
}
