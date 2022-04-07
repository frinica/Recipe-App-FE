import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css'],
})
export class SinglePageComponent implements OnInit {
  id!: number;
  recipe!: Recipe;

  constructor(
    public recipeService: RecipeService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];

    this.recipeService.getByID(this.id).subscribe((data: Recipe[]) => {
      this.recipe = data[0];
    });
  }
}
