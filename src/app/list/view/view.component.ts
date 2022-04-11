import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  list: List[] = [];
  recipes: ListEntry[] = [];

  constructor(
    public listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.listService.getByID(this.id).subscribe((data: any) => {
      this.list = data[0];
      this.recipes = data[1];
      console.log(data);
    });
  }
}
