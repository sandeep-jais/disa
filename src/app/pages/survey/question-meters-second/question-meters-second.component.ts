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
    if(type=='mtr'){
      this.answer.emit({...this.question,meters: this.question.meters+1 });
    }else{
      this.answer.emit({...this.question,centimeter: this.question.centimeter+1 });
    }
  }

  pressMinus(type:string){
    if(type=='mtr'){
      this.answer.emit({...this.question,meters: this.question.meters==0?0:this.question.meters-1  });
    }else{
      this.answer.emit({...this.question,centimeter: this.question.centimeter==0?0:this.question.centimeter-1 });
    }
  }

  value:string ="";


  change(){
    console.log("first")
    this.answer.emit({...this.question,answer: this.value });
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
