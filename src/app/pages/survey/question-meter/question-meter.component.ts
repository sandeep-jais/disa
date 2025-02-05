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
