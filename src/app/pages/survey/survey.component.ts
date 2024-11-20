import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FSU_QUESTIONS, GONDOLA_QUESTIONS, PRODUCT_QUESTIONS } from '../../constants/questions';
import { HeaderComponent } from "../../components/common/header/header.component";
import { CheckAnswerPipe } from '../../pipes/checkAnswer.pipe';
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
import { QuestionTextComponent } from './question-text/question-text.component';
import { QuestionMeterSecondComponent } from './question-meters-second/question-meters-second.component';
import { QuestionSingleYesNoComponent } from "./question-single-yes-no/question-single-yes-no.component";
import { QuestionInformationComponent } from "./question-information/question-information.component";
import { QuestionGondolaAndFSUComponent } from './question-gondola-fsu/question-gondola-fsu.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ButtonModule, HeaderComponent, BackButtonComponent, QuestionMeterComponent, CheckAnswerPipe, NextButtonComponent, QuestionStartComponent, QuestionTextComponent,
    QuestionMeterCountComponent, QuestionMeterImageComponent, QuestionImageComponent, AnswerLengthPipe, QuestionMeterSecondComponent,
    QuestionMultiSelectImageComponent, QuestionMultiSelectQuestionComponent, QuestionImageComponent, ImageLightBoxComponent,
    QuestionGondolaAndFSUComponent, ConfirmDialogModule,
    CustomProgressComponent, QuestionSingleYesNoComponent, QuestionInformationComponent],
  providers: [ConfirmationService],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  questions: any[] = PRODUCT_QUESTIONS;
  router = inject(Router);
  confirmService = inject(ConfirmationService);
  isStarted: boolean = false;
  isCompleted: boolean = false;
  selectedImage: any;
  visible: boolean = false;
  step: number = 0;
  images: any = ['', '', ''];
  files: any = [];

  ngOnInit() {
    console.log("", JSON.parse(JSON.stringify(DATA_PRODUCT)));
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

  changeStep(event: any) {
    if (this.step == 19) {
      if (!this.questions[this.step].answer) {
        return this.confirm(event);
      } else if (this.questions[this.step].answer == 'fsu') {
        this.questions=this.questions.concat(FSU_QUESTIONS);
      } else if (this.questions[this.step].answer == 'gondola') {
        this.questions=this.questions.concat(GONDOLA_QUESTIONS);
      }
    }
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

  back() {
      if(this.step==20){
        this.questions= this.questions.splice(0,20);
      }
      this.step--;
  }
  answer(ans?: any) {
    this.questions[this.step] = ans;
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

  openPreview(fileName: any) {
    this.selectedImage = fileName;
    this.visible = true;
  }
  hideLightBox() {
    this.visible = false;
    this.selectedImage = null;
  }

  confirm(event: Event) {
    this.confirmService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to complete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.step = 0;
        this.isCompleted = true;
        this.time = 0;
        this.images = ['', '', ''];
      }
    });
  }

}
