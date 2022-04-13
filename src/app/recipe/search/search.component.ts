import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  recipes: Recipe[] = [];

  // Filter arrays
  mealTypes: Array<any> = [
    { name: 'Main course', value: 'main+course' },
    { name: 'Breakfast', value: 'breakfast' },
    { name: 'Appetizer', value: 'appetizer' },
    { name: 'Dessert', value: 'dessert' },
  ];
  cuisines: Array<any> = [
    { name: 'Chinese', value: 'chinese' },
    { name: 'French', value: 'french' },
    { name: 'Indian', value: 'indian' },
    { name: 'Italian', value: 'italian' },
    { name: 'Japanese', value: 'japanese' },
    { name: 'Mexican', value: 'mexican' },
    { name: 'Nordic', value: 'nordic' },
  ];
  diets: Array<any> = [
    { name: 'Gluten free', value: 'gluten free' },
    { name: 'Vegetarian', value: 'vegetarian' },
    { name: 'Vegan', value: 'vegan' },
    { name: 'Pescetarian', value: 'pescetarian' },
  ];

  constructor(
    public recipeService: RecipeService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: '',
      type: '',
      cuisine: '',
      diet: '',
    });
  }

  submit(/* value: string */) {
    /* console.log(value);
    this.query = value;

    this.router.navigate(['recipe/' + this.query]); */
    const formData = this.form.getRawValue();

    const query = {
      search: formData.search,
      type: formData.type,
      cuisine: formData.cuisine,
      diet: formData.diet,
    };
    console.log(query);

    this.recipeService.getAll(query).subscribe(
      (data: any) => {
        this.recipes = data.results;
      },
      (error) => {
        console.log(error);
      }
    );

    /* this.router.navigate(['recipe/' + query]); */
  }
}
