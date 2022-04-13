import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  user: any;

  constructor(
    public listService: ListService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    this.http
      .get('https://frinicas-recipe-app-be.herokuapp.com/api/user', {
        headers: headers,
      })
      .subscribe((result: any) => (this.user = result));
    (err: any) => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    };

    this.form = new FormGroup({
      list_name: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.listService
      .store(this.form.value, this.user.id)
      .subscribe((res: any) => {
        console.log('List created successfully!');
        this.router.navigateByUrl('lists/create');
      });
  }
}
