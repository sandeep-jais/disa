import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-question-text',
  standalone: true,
  imports: [FormsModule, InputTextareaModule],
  templateUrl: './question-text.component.html',
  styleUrl: './question-text.component.scss'
})
export class QuestionTextComponent {
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();

  value:string ="";


  change(){
    console.log("first")
    this.answer.emit({...this.question,answer: this.value });
  }

}
