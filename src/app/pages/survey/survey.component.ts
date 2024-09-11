import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { QUESTIONS } from '../../constants/questions';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  questions = QUESTIONS;
  router = inject(Router);
  isStarted: boolean = false;
  isCompleted: boolean = false;
  step: number = 0;
  images:any=[];
  files:any=[];
  navigate(path: string) {
    this.router.navigate([path]);
  }

  start() {
    this.isStarted = true;
  }

  changeStep(){
    if(this.step == (this.questions.length-1)){
       this.step= 0;
       this.isCompleted= true;
    }else{
      this.step+=1;
    }
  }

  answer(ans?:any){
      this.questions[this.step].answer= ans;
  }

  selectFileChange(event:any){
    const files= event.target.files;
    this.files=[...this.files, ...files];
    for(let f of files){
      let link=URL.createObjectURL(f);
      this.images.push(link);
    }
  }
}
