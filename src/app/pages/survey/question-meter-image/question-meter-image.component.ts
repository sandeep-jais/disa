import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ImageService } from '../../../services/image.service';
@Component({
  selector: 'app-question-meter-image',
  standalone: true,
  imports: [FormsModule, InputTextareaModule, InputTextModule],
  templateUrl: './question-meter-image.component.html',
  styleUrl: './question-meter-image.component.scss'
})
export class QuestionMeterImageComponent {
  @Input('question') question: any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();

  public imageService = inject(ImageService);
  pressPlus(type: string) {
    if (type == 'mtr') {
      this.answer.emit({ ...this.question, meters: this.question.meters + 1 });
    } else {
      this.answer.emit({ ...this.question, centimeter: this.question.centimeter + 1 });
    }
  }

  pressMinus(type: string) {
    if (type == 'mtr') {
      this.answer.emit({ ...this.question, meters: this.question.meters == 0 ? 0 : this.question.meters - 1 });
    } else {
      this.answer.emit({ ...this.question, centimeter: this.question.centimeter == 0 ? 0 : this.question.centimeter - 1 });
    }
  }

  value: string = "";


  change() {
    console.log("first")
    this.answer.emit({ ...this.question, answer: this.value });
  }

  selectFile(type: string, event: any) {
    let file = event.files[0];
    let link = URL.createObjectURL(file);
    const img: any = document.createElement('img');
    img.src = link;
    img.onload = () => {
      this.imageService.isImageBlurred(img).then((isBlurred) => {
        if(isBlurred){
          alert("Please upload clear image.")
        }else{
          this.answer.emit({ ...this.question, sideViewFile: file, sideViewImage: link });
        }
      }).catch((err) => {
        console.error('Error:', err);
      });
    };
  }

}
