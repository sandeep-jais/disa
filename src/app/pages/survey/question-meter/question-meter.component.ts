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
    console.log(this.question)
    if(type=='mtr'){
      this.answer.emit({...this.question,answer:{...this.question.answer,meters: Number(this.question?.answer?.meters||0)+1 }});
    }else{
      this.answer.emit({...this.question,answer:{...this.question.answer,centimeter: Number(this.question?.answer?.centimeter||0)+1 }});
    }
  }

  pressMinus(type:string){
    if(type=='mtr'){
      this.answer.emit({...this.question,answer:{...this.question.answer,meters: Number(this.question?.answer?.meters==0?0:this.question?.answer?.meters-1)  }});
    }else{
      this.answer.emit({...this.question,answer:{...this.question.answer,centimeter: Number(this.question?.answer?.centimeter==0?0:this.question?.answer?.centimeter-1) }});
    }
  }

}
