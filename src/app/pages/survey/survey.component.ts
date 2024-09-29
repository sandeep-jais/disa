import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PRODUCT_QUESTIONS, QUESTIONS } from '../../constants/questions';
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

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ButtonModule, HeaderComponent, BottomTabsComponent, BackButtonComponent,QuestionMeterComponent,
    FooterComponent, CounterComponent, CheckAnswerPipe, NextButtonComponent, QuestionStartComponent,
    QuestionMeterCountComponent,QuestionMeterImageComponent,QuestionMultiSelectImageComponent,QuestionMultiSelectQuestionComponent 
  ],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  questions = PRODUCT_QUESTIONS;
  router = inject(Router);
  isStarted: boolean = false;
  isCompleted: boolean = false;
  step: number = 0;
  images: any = ['', '', ''];
  files: any = [];
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

  answer(ans?: any) {
    this.questions[this.step].answer = ans;
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
}
