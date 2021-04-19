import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import {UserService} from '../user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  returnUrl : string ='/'

  constructor(private userService: UserService, 
     private router: Router,
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    if (this.userService.user) {
      this.router.navigate([this.returnUrl]);
    }
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.userService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                  console.warn('Invalid username or password.');
                });
  }
  
}