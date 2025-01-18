import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ENV } from '../../../environments/environment';
import { ImageService } from '@services/image.service';
import { MediaService } from '@services/media/media.service';

@Component({
  selector: 'app-question-meter-count',
  standalone: true,
  imports: [],
  templateUrl: './question-meter-count.component.html',
  styleUrl: './question-meter-count.component.scss'
})
export class QuestionMeterCountComponent {
  fileUrl = ENV.FILE_URL;

  public imageService = inject(ImageService);
  public mediaService = inject(MediaService);
  @Input('question') question: any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();

  pressPlus() {
    this.answer.emit({ ...this.question, answer:{...this.question.answer,counts: Number(this.question?.answer?.counts||0)+1 } });
  }

  pressMinus() {
    this.answer.emit({ ...this.question, answer:{...this.question.answer,counts: this.question?.answer?.counts == 0 ? 0 : this.question?.answer?.counts - 1 }});
  }

  selectFile(event: any) {
    let file = event.files[0];
    let link = URL.createObjectURL(file);
    const img: any = document.createElement('img');
    img.src = link;
    img.onload = () => {
      this.imageService.isImageBlurred(img).then((isBlurred) => {
        if (isBlurred) {
          alert("Please upload clear image.")
        } else {
          const formdata = new FormData();
          formdata.append('file', file);
          this.mediaService.uploadMedia(formdata).subscribe((data: any) => {
            this.answer.emit({ ...this.question, answer: { ...this.question?.answer, image: data?.file } });
          })
        }
      }).catch((err) => {
        console.error('Error:', err);
      });
    };
  }
}
