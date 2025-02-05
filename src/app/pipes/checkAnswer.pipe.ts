import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkAnswer',
  standalone: true,
  pure: false
})
export class CheckAnswerPipe implements PipeTransform {
  transform(validation:any): unknown {
    const error={...validation};
    let errors= null;
    if(error.sectionName){
      errors= 'Section name is required.'
    }else if(error.image){
      errors= 'Image is required.'
    }else if(error.selection){
      errors= 'Selection is required.'
    }
    console.log(errors)
    return errors ? true : false;
  }
}
