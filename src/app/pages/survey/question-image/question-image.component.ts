import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-image',
  standalone: true,
  imports: [],
  templateUrl: './question-image.component.html',
  styleUrl: './question-image.component.scss'
})
export class QuestionImageComponent {
  @Input('question') question:any;
}
