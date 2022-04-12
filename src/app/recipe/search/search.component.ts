import { Component, Directive, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  value!: String;
  query = '';
  /*mealTypes: Array<any> = ['Main course', 'Breakfast', 'Appetizer', 'Dessert'];
  cuisines: Array<any> = [
    'Chinese',
    'French',
    'Indian',
    'Italian',
    'Japanese',
    'Mexican',
    'Nordic',
  ];

  Diet: Array<any> = [
    { name: 'Gluten free', value: 'gluten free' },
    { name: 'Vegetarian', value: 'vegetarian' },
    { name: 'Vegan', value: 'vegan' },
    { name: 'Pescetarian', value: 'pescetarian' },
  ];
   */

  constructor(
    public recipeService: RecipeService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      searchTerm: new FormControl(''),
      cuisines: new FormControl(''),
    });
  }

  submit(value: string) {
    console.log(value);
    this.query = value;

    this.router.navigate(['recipe/' + this.query]);
  }
}
