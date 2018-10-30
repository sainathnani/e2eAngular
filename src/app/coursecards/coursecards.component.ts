import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Courses} from '../models/Courses';

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

}
