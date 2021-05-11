import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/Feedback'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {

  feedback: UFeedback;
  
  submitted = false;

  constructor(private recipeServe: RecipeService) {}

  onSubmit() { 
      console.log(this.feedback);
    this.recipeServe.addFeedback(this.feedback).subscribe();
    this.submitted = true;
}


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