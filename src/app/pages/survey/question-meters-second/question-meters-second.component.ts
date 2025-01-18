import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-question-meters-second',
  standalone: true,
  imports: [FormsModule, InputTextareaModule, InputTextModule],
  templateUrl: './question-meters-second.component.html',
  styleUrl: './question-meters-second.component.scss'
})
export class QuestionMeterSecondComponent {
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();
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
