import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
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
  @Output() validation = new EventEmitter<any>();
  counts:any={counts:0};
  validators={
    image: true,
  }
  ngOnInit(){
    this.counts={counts:0};
    if(this.question?.surveyorImage){
      this.validators= {...this.validators, image: false};
    }
    if(this.question?.surveyorResponse){
      this.counts= JSON.parse(this.question?.surveyorResponse||"{counts:0}");
    }
    this.validation.emit(this.validators);
  }

  pressPlus() {
    this.answer.emit({ ...this.question, surveyorResponse:JSON.stringify({counts: Number(this.counts.counts||0)+1 })});
    this.counts.counts= Number(this.counts.counts||0)+1;
  }

  pressMinus() {
    this.answer.emit({ ...this.question, surveyorResponse:JSON.stringify({counts: this.counts.counts == 0 ? 0 : this.counts.counts - 1 })});
    this.counts.counts= {counts: this.counts.counts == 0 ? 0 : this.counts.counts - 1 }
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
            this.answer.emit({ ...this.question, surveyorImage: data?.file });
            this.validators= {...this.validators, image: false};
            this.validation.emit(this.validators);
          })
        }
      }).catch((err) => {
        console.error('Error:', err);
      });
    };
  }
}
