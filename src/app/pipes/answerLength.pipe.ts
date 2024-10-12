import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'answerLength',
  standalone: true,
  pure: false
})
export class AnswerLengthPipe implements PipeTransform {
  transform(questions:any[]): number {
    return questions.filter((q:any)=>q?.answer).length;
  }
}
