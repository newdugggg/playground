import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceWith',
})
export class ReplaceWithPipe implements PipeTransform {
  transform(value: string, replace: string, withChar: string): string {
    return value.replace(new RegExp(replace, 'g'), withChar);
  }
}
