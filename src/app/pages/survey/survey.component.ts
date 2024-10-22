import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PRODUCT_QUESTIONS} from '../../constants/questions';
import { HeaderComponent } from "../../components/common/header/header.component";
import { FooterComponent } from "../../components/common/footer/footer.component";
import { CounterComponent } from "../../components/common/counter/counter.component";
import { CheckAnswerPipe } from '../../pipes/checkAnswer.pipe';
import { BottomTabsComponent } from '../../components/common/bottom-tabs/bottom-tabs.component';
import { NextButtonComponent } from "../../components/common/next-button/next-button.component";
import { BackButtonComponent } from '../../components/common/back-button/back-button.component';
import { QuestionStartComponent } from "./question-start/question-start.component";
import { QuestionMeterComponent } from './question-meter/question-meter.component';
import { QuestionMeterCountComponent } from './question-meter-count/question-meter-count.component';
import { QuestionMeterImageComponent } from './question-meter-image/question-meter-image.component';
import { QuestionMultiSelectImageComponent } from './question-multi-select-image/question-multi-select-image.component';
import { QuestionMultiSelectQuestionComponent } from './question-multi-select-question/question-multi-select-question.component';
import { QuestionImageComponent } from "./question-image/question-image.component";
import { ImageLightBoxComponent } from "../../components/image-light-box/image-light-box.component";
import { CustomProgressComponent } from "../../components/common/custom-progress/custom-progress.component";
import { AnswerLengthPipe } from '../../pipes/answerLength.pipe';
import { DATA_PRODUCT } from '../../constants';

@Component({
  selector: 'app-survey', 
  standalone: true,
  imports: [ButtonModule, HeaderComponent, BottomTabsComponent, BackButtonComponent, QuestionMeterComponent,
    FooterComponent, CounterComponent, CheckAnswerPipe, NextButtonComponent, QuestionStartComponent,
    QuestionMeterCountComponent, QuestionMeterImageComponent, QuestionImageComponent,AnswerLengthPipe,
    QuestionMultiSelectImageComponent, QuestionMultiSelectQuestionComponent, QuestionImageComponent, ImageLightBoxComponent, CustomProgressComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  questions:any = PRODUCT_QUESTIONS;
  router = inject(Router);
  isStarted: boolean = false;
  isCompleted: boolean = false;
  selectedImage:any;
  visible:boolean= false;
  step: number = 0;
  images: any = ['', '', ''];
  files: any = [];

  ngOnInit(){
    console.log("",JSON.parse(JSON.stringify(DATA_PRODUCT)));
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }
  time: number = 0;
  faces: any = {
    '0': 'Top',
    '1': 'Left',
    '2': 'Right'
  }

  start() {
    this.isStarted = true;
    this.time = 0;
    this.startTimer();
  }

  changeStep() {
    this.questions[this.step].answer = true;
    if (this.step == (this.questions.length - 1)) {
      this.step = 0;
      this.isCompleted = true;
      this.time = 0;
      this.images = ['', '', ''];
    } else {
      this.step += 1;
      this.questions[this.step].time = this.time;
      this.time = 0;
      this.images = ['', '', ''];
    }
  }

  back(){
    this.step--;
  }
  answer(ans?: any) {
    this.questions[this.step]= ans;
  }

  selectFileChange(event: any, index: number) {
    const file = event.target.files[0];
    this.files = [...this.files, file];
    if (file) {
      let link = URL.createObjectURL(file);
      this.images[index] = link;
    }
  }

  startTimer() {
    setInterval(() => {
      this.time = this.time + 1;
    }, 1000)
  }
 
  openPreview(fileName:any){
    this.selectedImage= fileName;
    this.visible= true;
  }
  hideLightBox(){
    this.visible= false;
    this.selectedImage= null;
  }
}
