import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ENV } from '../../../environments/environment';
import { ImageService } from '@services/image.service';
import { MediaService } from '@services/media/media.service';

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
  public imageService = inject(ImageService);
  public mediaService = inject(MediaService);
  checked(type:string){
    if(type=='checked'){
      this.answer.emit({...this.question, answer:{...this.question?.answer, checked: true}});
    }else{
      this.answer.emit({...this.question, answer:{...this.question?.answer, checked: false}});
    }
  }
  selectFile(type:string, event:any){
    let file = event.files[0];
    let link = URL.createObjectURL(file);
    const img: any = document.createElement('img');
    img.src = link;
    img.onload = () => {
      this.imageService.isImageBlurred(img).then((isBlurred) => {
        if(isBlurred){
          alert("Please upload clear image.")
        }else{
          const formdata= new FormData();
          formdata.append('file', file);
          this.mediaService.uploadMedia(formdata).subscribe((data:any)=>{
            this.answer.emit({ ...this.question, answer:{...this.question?.answer,image: data?.file} });
          })
        }
      }).catch((err) => {
        console.error('Error:', err);
      });
    };
  }
}
