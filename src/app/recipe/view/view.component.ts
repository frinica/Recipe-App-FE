import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    public recipeService: RecipeService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let query = String(this.actRoute.snapshot.paramMap.get('query'));

    this.recipeService.getAll(query).subscribe(
      (data: any) => {
        this.recipes = data.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
