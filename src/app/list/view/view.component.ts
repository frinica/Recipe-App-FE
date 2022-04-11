import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      console.log(data);

      console.log(this.lists);
      console.log(this.entries);

      let rID = this.entries.map((t) => t.recipe_id);
      console.log(rID);
    });

    //Hur data ska skickas som queryString

    /* let params = new HttpParams();
    const actors = ['Elvis', 'Jane', 'Frances'];
    params.append('actors', JSON.stringify(actors);
    this.http.get(url, { params }); */
  }
}
