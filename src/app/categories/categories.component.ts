import { Component, OnInit } from '@angular/core';
import {Categories} from '../models/Categories';
import {CategoryServiceService} from './category-service.service';
import {environment} from '../../environments/environment';

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

  constructImageUrl(imageId): String {
    return environment.constructUrl(environment.categoryImage) + imageId + environment.fssource;
  }
}
