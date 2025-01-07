import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ENV } from '../../../environments/environment';

@Component({
  selector: 'app-question-single-yes-no',
  standalone: true,
  imports: [ButtonModule,RippleModule],
  templateUrl: './question-single-yes-no.component.html',
  styleUrl: './question-single-yes-no.component.scss'
})
export class QuestionSingleYesNoComponent {
  fileUrl=ENV.FILE_URL;
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();

  checked(type:string){
    let ques= this.question;
    if(type=='checked'){
      ques.checked = true;
      this.answer.emit({...ques});
    }else{
      ques.checked = false;
      this.answer.emit({...ques});
    }
  }
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
