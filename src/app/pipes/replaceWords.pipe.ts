import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceWords',
  standalone: true,
})
export class ReplaceWordsPipe implements PipeTransform {
  transform(text:any, replacements:any,rest:any,rest2:any): number {
    const latestObj={
      ...replacements,
      ...rest,
      ...rest2
    };
    for (const [key, value] of Object.entries(latestObj||{})) {
      text = text.replace(new RegExp(key, 'g'), value);
    }
    return text;
  }
}
