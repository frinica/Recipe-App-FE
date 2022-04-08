import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  submit() {
    const formData = this.form.getRawValue();
    const data = {
      username: formData.username,
      password: formData.password,
    };

    this.http.post('http://localhost:8000/api/login', data).subscribe(
      (result: any) => {
        console.log('success');
        console.log(result);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }
}
