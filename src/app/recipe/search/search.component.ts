import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(public recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {}

  submit(value: string) {
    console.log(value);
    this.query = value;

    this.router.navigate(['recipe/' + this.query]);
  }
}
