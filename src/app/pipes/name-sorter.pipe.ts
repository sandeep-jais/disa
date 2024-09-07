import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSorter',
  standalone: true
})
export class NameSorterPipe implements PipeTransform {
  transform(value: string): unknown {
    let [f1,f2]= value.split(' ');
    return String(f1[0]+f2[0]).toUpperCase();
  }
}
