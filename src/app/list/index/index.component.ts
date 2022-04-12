import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  lists: List[] = [];

  constructor(public listService: ListService) {}

  ngOnInit(): void {
    this.listService.viewAll().subscribe((data: List[]) => {
      this.lists = data;
    });
  }

  delete(id: number) {
    this.listService.destroy(id).subscribe((res) => {
      this.lists = this.lists.filter((item) => item.id !== id);
      console.log('List deleted!');
    });
    this.ngOnInit();
  }
}
