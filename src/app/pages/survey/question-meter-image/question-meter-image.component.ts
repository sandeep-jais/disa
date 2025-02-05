import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ImageService } from '@services/image.service';
import { MediaService } from '@services/media/media.service';
import { ENV } from '@env/environment';
@Component({
  selector: 'app-question-meter-image',
  standalone: true,
  imports: [FormsModule, InputTextareaModule, InputTextModule],
  templateUrl: './question-meter-image.component.html',
  styleUrl: './question-meter-image.component.scss'
})
export class QuestionMeterImageComponent {
  fileUrl=ENV.FILE_URL;
  @Input('question') question: any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();

  public imageService = inject(ImageService);
  public mediaService = inject(MediaService);
  value: string = "";
  @Output() validation = new EventEmitter<any>();
  
  validators={
    image: true,
    sectionName: true
  }
  ngOnInit(){
    if(this.question?.surveyorImage){
      this.validators.image= false;
    }
    if(this.question?.surveyorResponse){
      this.validators.sectionName=false;
    }
    this.validation.emit(this.validators);
  }
  change(event:any) {
    this.answer.emit({ ...this.question, surveyorResponse: event?.target?.value });
    this.validators= {...this.validators, sectionName:event?.target?.value?.trim() ? false : true};
    this.validation.emit(this.validators);
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
          const formdata= new FormData();
          formdata.append('file', file);
          this.mediaService.uploadMedia(formdata).subscribe((data:any)=>{
            this.answer.emit({ ...this.question, surveyorImage:data?.file });
            this.validators= {...this.validators, image:false};
            this.validation.emit(this.validators);
          })
        }
      }).catch((err) => {
        console.error('Error:', err);
      });
    };
  }

}
