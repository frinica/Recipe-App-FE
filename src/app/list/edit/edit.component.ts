import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id!: number;
  list!: List;
  form!: FormGroup;

  constructor(
    public listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['listId'];
    this.listService.getByID(this.id).subscribe((data: List) => {
      this.list = data;
    });

    this.form = new FormGroup({
      list_name: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.listService.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('List has been updated successfully!');
      this.router.navigateByUrl('lists');
    });
  }
}
