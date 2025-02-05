import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HeaderComponent } from '@components/common/header/header.component';
import { BackButtonComponent } from '@components/common/back-button/back-button.component';
import { CheckAnswerPipe } from '@pipes/checkAnswer.pipe';
import { NextButtonComponent } from '@components/common/next-button/next-button.component';
import { CustomProgressComponent } from '@components/common/custom-progress/custom-progress.component';
import { AnswerLengthPipe } from '@pipes/answerLength.pipe';
import { ReplaceWordsPipe } from '@pipes/replaceWords.pipe';
import { ImageLightBoxComponent } from '@components/image-light-box/image-light-box.component';
import { QuestionService } from '@services/question/question.service';
import { UserService } from '@services/user.service';

import { QuestionMeterComponent } from './question-meter/question-meter.component';
import { QuestionMeterImageComponent } from './question-meter-image/question-meter-image.component';
import { QuestionCompleteComponent } from './question-complete/question-complete.component';
import { QuestionInformationComponent } from './question-information/question-information.component';
import { QuestionSingleYesNoComponent } from './question-single-yes-no/question-single-yes-no.component';
import { QuestionGondolaAndFSUComponent } from './question-gondola-fsu/question-gondola-fsu.component';
import { QuestionMultiSelectImageComponent } from './question-multi-select-image/question-multi-select-image.component';
import { QuestionMeterCountComponent } from './question-meter-count/question-meter-count.component';
import { QuestionMultiSelectQuestionComponent } from './question-multi-select-question/question-multi-select-question.component';
import { QuestionImageComponent } from './question-image/question-image.component';
import { QuestionMeterSecondComponent } from './question-meters-second/question-meters-second.component';
import { QuestionStartComponent } from './question-start/question-start.component';
import { QuestionTextComponent } from './question-text/question-text.component';
import { IUser } from 'types/user';
import { Toast } from 'primeng/toast';
import { JWT_TOKEN_EXPIRED } from '@constants/index';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ButtonModule,HeaderComponent, BackButtonComponent, QuestionMeterComponent, CheckAnswerPipe, NextButtonComponent, QuestionStartComponent, QuestionTextComponent,
    QuestionMeterCountComponent, QuestionMeterImageComponent, QuestionImageComponent, AnswerLengthPipe, QuestionMeterSecondComponent,
    QuestionMultiSelectImageComponent, QuestionMultiSelectQuestionComponent, QuestionImageComponent, ImageLightBoxComponent,
    QuestionGondolaAndFSUComponent, ConfirmDialogModule, ReplaceWordsPipe, QuestionCompleteComponent,
    CustomProgressComponent, QuestionSingleYesNoComponent, QuestionInformationComponent],
  providers: [ConfirmationService, MessageService],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  questions: any[] = [];
  originalQuestions: any[] = [];
  router = inject(Router);
  confirmService = inject(ConfirmationService);
  surveyQuestionService = inject(QuestionService);
  userService = inject(UserService);
  isStarted: boolean = false;
  isCompleted: boolean = false;
  selectedImage: any;
  visible: boolean = false;
  step: number = 0;
  images: any = ['', '', ''];
  files: any = [];
  sectionName: string = "";
  userDetail!: IUser;
  validation:any;
  errors:any;
  startTime:any;
  ngOnInit() {
    this.getSurveyQuestions();
    this.userDetail = this.userService.getUserInfo();
    this.startTime= new Date().getTime();
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }
  time: number = 0;

  start() {
    this.isStarted = true;
    this.time = 0;
    this.startTimer();
  }

  changeStep(event: any) {
    this.checkValidation(event);
  }

  back() {
    this.step -= 1;
    if (this.questions[this.step]['question-master'].screenType == 'gondola-fsu-selection') {
      this.questions = this.originalQuestions;
      this.questions[this.step].answer = {};
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
        this.completeSubmission();
      }
    });
  }

  getSurveyQuestions() {
    this.surveyQuestionService.getAllSurveyQuestions({}).subscribe((res: any) => {
      this.questions = res;
      this.originalQuestions = res;
    });
  }

  completeSubmission() {
    const payload = {
      surveyorId: this.userDetail.userId,
      answers: this.questions
    }
    this.surveyQuestionService.createSubmission(payload).subscribe((res: any) => {
      this.navigate("/product")
    });
  }

  setValidation(validators:any){
    this.validation= validators;
  }

  checkValidation(event:any){
    this.surveyQuestionService
    .updateSurveyQuestion(this.questions[this.step]?.surveyQuestionId,{
      ...this.questions[this.step], startTime:this.startTime,
      endTime:new Date().getTime()
    })
    .subscribe({
      next:(value)=> {
        console.log(value)
        if (this.questions[this.step]['question-master'].screenType == 'gondola-fsu-selection') {
          if (!this.questions[this.step].answer?.selection) {
            return this.confirm(event);
          } else if (this.questions[this.step].answer?.selection == 'fsu') {
            this.questions = this.originalQuestions.filter((q) => q['question-master'].storeDisplayLocation !== 'gondola');
            this.sectionName = this.questions[this.step].answer?.selection;
          } else if (this.questions[this.step].answer?.selection == 'gondola') {
            this.questions = this.originalQuestions.filter((q) => q['question-master'].storeDisplayLocation !== 'fsu');;
            this.sectionName = this.questions[this.step].answer?.selection;
          }
        }
        
        if (this.step == (this.questions.length - 2)) {
          let index = this.originalQuestions.findIndex((q) => q['question-master'].screenType == 'gondola-fsu-selection')
          this.step = index;
          this.time = 0;
          this.questions[this.step].answer = {};
        }else if(this.questions[this.step]?.skipToSurveyQuestionId && JSON.parse(this.questions[this.step]?.surveyorResponse||"{}")?.checked==false){
          let index = this.originalQuestions.findIndex((q) => q.surveyQuestionId == this.questions[this.step]?.skipToSurveyQuestionId)
          this.step = index;
        } else {
          this.step += 1;
          this.questions[this.step].time = this.time;
          this.time = 0;
        }
        this.startTime= new Date().getTime();
      },
      error:(err) =>{
        console.log(err)
        if(err.error.responseMessage==JWT_TOKEN_EXPIRED){
          alert("Session expired!")
          localStorage.clear();
          this.router.navigate(['/auth/login']);
        }else{
          alert("Error: " + err.error.responseMessage);
        }
      },
    })
  }
}
