import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question-meter-image',
  standalone: true,
  imports: [],
  templateUrl: './question-meter-image.component.html',
  styleUrl: './question-meter-image.component.scss'
})
export class QuestionMeterImageComponent {
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
