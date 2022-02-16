import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case',
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string, type: string, bind: string): string {
    if (type === 'low') {
      return value.toLowerCase() + ' ' + bind;
    } else if (type === 'up') {
      return value.toUpperCase() + '  ' + bind;
    } else {
      return value + '☺';
    }
  }
}
