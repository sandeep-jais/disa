import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-question-multi-select-image',
  standalone: true,
  imports: [ButtonModule,RippleModule],
  templateUrl: './question-multi-select-image.component.html',
  styleUrl: './question-multi-select-image.component.scss'
})
export class QuestionMultiSelectImageComponent {
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();

  checked(type:string,index:number){
    let ques= this.question;
    if(type=='checked'){
      ques.options[index].checked = true;
      this.answer.emit({...ques});
    }else{
      ques.options[index].checked = false;
      this.answer.emit({...ques});
    }
  }
}
