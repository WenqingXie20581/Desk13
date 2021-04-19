import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import {UserService} from '../user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm : FormGroup;
  returnUrl : string ='/login'



  constructor(private userService: UserService, 
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
 ) {
 }

 ngOnInit(): void {
   this.registerForm = this.formBuilder.group({
     emailAddress: '',
     username: '',
     password: ''
   });
 }

 onSubmit() {
  this.userService.register(this.registerForm.value)
  .pipe(first())
  .subscribe(
      data => {
          console.warn('Registration successful.');
          this.router.navigate([this.returnUrl]);
      },
      error => {
          console.warn('Registration fail.');
      });
}

}
