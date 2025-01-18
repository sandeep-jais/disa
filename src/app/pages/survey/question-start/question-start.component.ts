import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ImageService } from '@services/image.service';
import { MediaService } from '@services/media/media.service';

@Component({
  selector: 'app-question-start',
  standalone: true,
  imports: [],
  templateUrl: './question-start.component.html',
  styleUrl: './question-start.component.scss'
})
export class QuestionStartComponent {
  public imageService = inject(ImageService);
  public mediaService = inject(MediaService);
  @Input('question') question: any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();

  selectFile(type: string, event: any) {
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
