import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { Router } from '@angular/router';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-question-gondola-fsu',
  standalone: true,
  imports: [StyleClassModule, InputOtpModule, ButtonModule, FormsModule,ImageModule],
  templateUrl: './question-gondola-fsu.component.html',
  styleUrl: './question-gondola-fsu.component.scss'
})
export class QuestionGondolaAndFSUComponent {
  router= inject(Router);
  
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();
  @Output() openPreview = new EventEmitter<any>();
  @Output() select = new EventEmitter<any>();
  selectedStep:any;

  navigate(path:string){
    this.router.navigate([path])
  }

  clickOnStep(selection:any){
    this.answer.emit({...this.question,answer: selection });
    this.selectedStep= selection;
  }

}
