import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-meter-image',
  standalone: true,
  imports: [],
  templateUrl: './question-meter-image.component.html',
  styleUrl: './question-meter-image.component.scss'
})
export class QuestionMeterImageComponent {
  @Input('meters') meters:number=0;
  @Input('centimeter') centimeter:number=0;
}
