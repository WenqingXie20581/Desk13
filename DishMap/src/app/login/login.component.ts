import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  user : User;
  returnUrl: string = '/';

  constructor(private userService: UserService,  private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.username, this.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                });
  }



  register(){
    this.userService.register(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }


}
