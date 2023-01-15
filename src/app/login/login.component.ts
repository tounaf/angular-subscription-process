import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpClient: HttpClientService) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      username: '',
      password: ''
    });
  }

  login() {
      const data = JSON.stringify(this.formLogin.value);
      localStorage.clear()
      console.log(data);
      this.httpClient.pos('/login_check', data).subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/type-produit/list']);
        }
      )
  }



}
