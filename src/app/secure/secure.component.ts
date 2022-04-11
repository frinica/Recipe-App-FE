import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    this.http
      .get('http://localhost:8000/api/user', { headers: headers })
      .subscribe((result: any) => (this.user = result));
    (err: any) => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    };
    this.router.navigate(['/home']);
  }
}
