import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question-start',
  standalone: true,
  imports: [],
  templateUrl: './question-start.component.html',
  styleUrl: './question-start.component.scss'
})
export class QuestionStartComponent {
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();

  selectFile(type:string, event:any){
    let file= event.files[0];
    let link = URL.createObjectURL(file);
    if(type=='front'){
      this.answer.emit({...this.question,frontViewFile:file,frontViewImage: link });
    }else{
      this.answer.emit({...this.question,sideViewFile:file,sideViewImage: link });
    }
  }

}
