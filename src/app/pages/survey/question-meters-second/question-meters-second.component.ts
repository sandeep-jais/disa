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
  response:any;
  ngOnInit(){
    this.response= JSON.parse(this.question.surveyorResponse||"{meters:0,centimeter:0}");
  }
  pressPlus(type:string){
    console.log(this.question)
    if(type=='mtr'){
      this.answer.emit({...this.question,surveyorResponse:JSON.stringify({...this.response,meters: Number(this.response?.meters||0)+1 })});
      this.response={...this.response,meters: Number(this.response?.meters||0)+1 }
    }else{
      this.answer.emit({...this.question,surveyorResponse:JSON.stringify({...this.response,centimeter: Number(this.response?.centimeter||0)+1 })});
      this.response={...this.response,centimeter: Number(this.response?.centimeter||0)+1 }
    }
  }

  pressMinus(type:string){
    if(type=='mtr'){
      this.answer.emit({...this.question,surveyorResponse:JSON.stringify({...this.response,meters: Number(this.response?.meters==0?0:this.response?.meters-1)  })});
      this.response={...this.response,meters: Number(this.response?.meters==0?0:this.response?.meters-1) }
    }else{
      this.answer.emit({...this.question,surveyorResponse:JSON.stringify({...this.response,centimeter: Number(this.response?.centimeter==0?0:this.response?.centimeter-1) })});
      this.response={...this.response,centimeter: Number(this.response?.centimeter==0?0:this.response?.centimeter-1) }
    }
  }
}
