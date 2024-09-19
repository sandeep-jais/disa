import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkAnswer',
  standalone: true,
  pure: false
})
export class CheckAnswerPipe implements PipeTransform {
  transform(questions:any[],step:number,images:any[]): unknown {
    if (questions[step].type == 'thumbsup') {
      return images.includes('');
    } else if (questions[step].type == 'counter') {
      return questions[step].answer ? true : false;
    }
    return false;
  }
}
