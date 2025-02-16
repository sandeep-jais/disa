import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySearchFilter',
  standalone: true,
})
export class ArraySearchFilterPipe implements PipeTransform {
  transform(items: any[], searchKey: string, searchText: string): any[] {
    if (!items || !searchKey || !searchText) {
      return items; // Return original array if no search criteria
    }

    const lowerCaseSearchText = searchText.toLowerCase();

    return items.filter(item => 
      item[searchKey] && item[searchKey].toString().toLowerCase().includes(lowerCaseSearchText)
    );
  }
}
