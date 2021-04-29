import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/Feedback'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {

  feedback: UFeedback;
  
  submitted = false;

  constructor() {}

  onSubmit() { this.submitted = true; }


  ngOnInit(): void {
    this.feedback = new UFeedback;
  }
}





class UFeedback implements Feedback {
  name: string;
  email: string;
  questions: string[];
  advice : string;

  constructor() {
    this.questions = new Array(4);
  }
}