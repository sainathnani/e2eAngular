import { Component, OnInit } from '@angular/core';
import {Categories} from '../models/Categories';
import {CategoryServiceService} from './category-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private catService: CategoryServiceService) { }

  allCategories: Categories[] = [];
  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(): void {
  this.catService.getCategories().subscribe(res => {
    this.allCategories = res;
  });
  }
}
