import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-meter',
  standalone: true,
  imports: [],
  templateUrl: './question-meter.component.html',
  styleUrl: './question-meter.component.scss'
})
export class QuestionMeterComponent {
  @Input('meters') meters:number=0;
  @Input('centimeter') centimeter:number=0;

}
