import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question-multi-select-question',
  standalone: true,
  imports: [],
  templateUrl: './question-multi-select-question.component.html',
  styleUrl: './question-multi-select-question.component.scss'
})
export class QuestionMultiSelectQuestionComponent {
    @Input('question') question:any;
    @Output() answer = new EventEmitter<any>();

    selectFile(event:any){
      let file= event.files[0];
      let link = URL.createObjectURL(file);
      this.answer.emit({...this.question,file,image: link });
    }

    checked(event:any,index:number){
      let checked= event.checked;
      let ques= this.question;
      if(checked){
        ques.options[index].value = true;
        this.answer.emit({...ques});
      }else{
        ques.options[index].value = false;
        this.answer.emit({...ques});
      }
    }
}
