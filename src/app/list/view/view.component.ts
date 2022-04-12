import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/recipe/recipe';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { List, ListEntry } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  id!: number;
  lists: List[] = [];
  entries: ListEntry[] = [];
  entry!: any;
  recipes: Recipe[] = [];
  rID!: any;

  constructor(
    public listService: ListService,
    private route: ActivatedRoute,
    public recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.listService.getByID(this.id).subscribe((data: any) => {
      this.lists = data[0];
      this.entries = data[1];

      this.rID = this.entries.map((t) => t.recipe_id);
      this.entry = this.entries.map((t) => t.id);

      this.recipeService.getBulk(this.rID).subscribe(
        (data: any) => {
          this.recipes = data;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  deleteRecipe(id: number) {
    this.listService.delete(id).subscribe((res) => {
      this.entry = this.entry.filter((item: any) => item.id !== id);
      console.log('Recipe was removed!');
    });
    this.ngOnInit();
  }
}
