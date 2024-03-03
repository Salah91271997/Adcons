import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subText',
})
export class SubTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 100) {
      return value.slice(0, 100) + ' ...';
    } else {
      return value;
    }
  }
}
