import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PRODUCT_QUESTIONS } from '../../constants/questions';
import { HeaderComponent } from "../../components/common/header/header.component";
import { FooterComponent } from "../../components/common/footer/footer.component";
import { CounterComponent } from "../../components/common/counter/counter.component";
import { CheckAnswerPipe } from '../../pipes/checkAnswer.pipe';
import { BottomTabsComponent } from '../../components/common/bottom-tabs/bottom-tabs.component';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ButtonModule, HeaderComponent,BottomTabsComponent,
     FooterComponent, CounterComponent,CheckAnswerPipe],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent2 {
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
