import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(public recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAll().subscribe((recipes: any) => {
      this.recipes = recipes;
    });
  }
}
