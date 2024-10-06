import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question-meter',
  standalone: true,
  imports: [],
  templateUrl: './question-meter.component.html',
  styleUrl: './question-meter.component.scss'
})
export class QuestionMeterComponent {
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();

  pressPlus(type:string){
    if(type=='mtr'){
      this.answer.emit({...this.question,meters: this.question.meters+1 });
    }else{
      this.answer.emit({...this.question,centimeter: this.question.centimeter+1 });
    }
  }

  pressMinus(type:string){
    if(type=='mtr'){
      this.answer.emit({...this.question,meters: this.question.meters==0?0:this.question.meters-1  });
    }else{
      this.answer.emit({...this.question,centimeter: this.question.centimeter==0?0:this.question.centimeter-1 });
    }
  }

}
