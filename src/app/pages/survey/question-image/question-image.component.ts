import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question-image',
  standalone: true,
  imports: [],
  templateUrl: './question-image.component.html',
  styleUrl: './question-image.component.scss'
})
export class QuestionImageComponent {
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();

  selectFile(event:any){
    let file= event.files[0];
    let link = URL.createObjectURL(file);
    this.answer.emit({...this.question,file,image: link });
  }
}
