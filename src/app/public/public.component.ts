import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {
  recipes!: Recipe[];

  constructor(public recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRandom().subscribe(
      (data: any) => {
        this.recipes = data.recipes.map((res: any) => res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
