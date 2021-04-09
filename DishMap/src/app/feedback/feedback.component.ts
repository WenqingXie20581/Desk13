import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormGroupDirective,FormControl,  NgForm, ValidatorFn, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isLinear: boolean;

  surveyForm: FormGroup;
  constructor() {
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required)
      })
    });
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();


  ngOnInit(): void {
  }

}
