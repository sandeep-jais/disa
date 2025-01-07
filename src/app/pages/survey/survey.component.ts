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
import { QuestionService } from '../../services/question/question.service';
import { ReplaceWordsPipe } from '../../pipes/replaceWords.pipe';
import { QuestionCompleteComponent } from './question-complete/question-complete.component';
@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ButtonModule, HeaderComponent, BackButtonComponent, QuestionMeterComponent, CheckAnswerPipe, NextButtonComponent, QuestionStartComponent, QuestionTextComponent,
    QuestionMeterCountComponent, QuestionMeterImageComponent, QuestionImageComponent, AnswerLengthPipe, QuestionMeterSecondComponent,
    QuestionMultiSelectImageComponent, QuestionMultiSelectQuestionComponent, QuestionImageComponent, ImageLightBoxComponent,
    QuestionGondolaAndFSUComponent, ConfirmDialogModule, ReplaceWordsPipe,QuestionCompleteComponent,
    CustomProgressComponent, QuestionSingleYesNoComponent, QuestionInformationComponent],
  providers: [ConfirmationService],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  questions: any[] = [];
  originalQuestions:any[] = [];
  router = inject(Router);
  confirmService = inject(ConfirmationService);
  surveyQuestionService= inject(QuestionService);
  isStarted: boolean = false;
  isCompleted: boolean = false;
  selectedImage: any;
  visible: boolean = false;
  step: number = 0;
  images: any = ['', '', ''];
  files: any = [];
  sectionName: string = "";
  ngOnInit() {
    this.getSurveyQuestions();
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
    if (this.questions[this.step]['question-master'].screenType=='gondola-fsu-selection') {
      console.log(this.questions[this.step].answer, this.step)
      if (!this.questions[this.step].answer) {
        return this.confirm(event);
      } else if (this.questions[this.step].answer == 'fsu') {
        this.questions = this.originalQuestions.filter((q)=> q['question-master'].storeDisplayLocation!=='gondola');
        this.sectionName = this.questions[this.step].answer;
      } else if (this.questions[this.step].answer == 'gondola') {
        this.questions = this.originalQuestions.filter((q)=> q['question-master'].storeDisplayLocation!=='fsu');;
        this.sectionName = this.questions[this.step].answer;
      }
    }
    this.questions[this.step].answer = true;
    if (this.step == (this.questions.length - 2)) {
      let index= this.originalQuestions.findIndex((q)=> q['question-master'].screenType=='gondola-fsu-selection')
      this.step = index;
      this.time = 0;
      this.questions[this.step].answer = false;
    } else {
      this.step += 1;
      this.questions[this.step].time = this.time;
      this.time = 0;
    }
  }

  back() {
    this.step-=1;
    if (this.questions[this.step]['question-master'].screenType=='gondola-fsu-selection') {
      this.questions = this.originalQuestions;
      this.questions[this.step].answer= false;
      console.log(this.questions[this.step].answer, this.step)
    }
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

  getSurveyQuestions(){
    this.surveyQuestionService.getAllSurveyQuestions({}).subscribe((res: any) => {
      this.questions = res;
      this.originalQuestions= res;
    });
  }

}
