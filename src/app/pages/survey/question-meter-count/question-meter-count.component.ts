import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ENV } from '../../../environments/environment';

@Component({
  selector: 'app-question-meter-count',
  standalone: true,
  imports: [],
  templateUrl: './question-meter-count.component.html',
  styleUrl: './question-meter-count.component.scss'
})
export class QuestionMeterCountComponent {
  fileUrl=ENV.FILE_URL;
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();

  pressPlus(){
      this.answer.emit({...this.question,counts: this.question.counts+1 });
  }

  pressMinus(){
      this.answer.emit({...this.question,counts: this.question.counts==0?0:this.question.counts-1  });
  }

  selectFile(event:any){
    let file= event.files[0];
    let link = URL.createObjectURL(file);
    this.answer.emit({...this.question,file,image: link });
  }
}
