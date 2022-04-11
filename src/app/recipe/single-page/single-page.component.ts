import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/list/list';
import { ListService } from 'src/app/list/list.service';
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
  form!: FormGroup;
  lists: List[] = [];

  constructor(
    public recipeService: RecipeService,
    public listService: ListService,
    private actRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];

    this.recipeService.getByID(this.id).subscribe(
      (data: Recipe) => {
        this.recipe = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

    this.listService.viewAll().subscribe(
      (data: List[]) => {
        this.lists = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

    this.form = new FormGroup({
      customlist_id: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.listService
      .update(this.form.value, this.recipe.id)
      .subscribe((res: any) => {
        console.log('Recipe has been added to the list!');
      });
  }
}
