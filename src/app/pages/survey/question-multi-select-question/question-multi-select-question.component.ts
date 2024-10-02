import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-multi-select-question',
  standalone: true,
  imports: [],
  templateUrl: './question-multi-select-question.component.html',
  styleUrl: './question-multi-select-question.component.scss'
})
export class QuestionMultiSelectQuestionComponent {
    @Input('question') question:any;
}
