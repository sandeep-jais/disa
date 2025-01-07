import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkAnswer',
  standalone: true,
  pure: false
})
export class CheckAnswerPipe implements PipeTransform {
  transform(questions:any[],step:number,images:any[]): unknown {
    // if (questions[step].type == 'thumbsup') {
    //   return images.includes('');
    // } else if (questions[step]. == 'counter') {
    //   return questions[step].answer>0 ? false : true;
    // }
    return false;
  }
}
