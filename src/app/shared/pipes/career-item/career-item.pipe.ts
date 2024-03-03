import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'careerSub',
})
export class CareerItemPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 200) {
      return value.slice(0, 75) + ' ...';
    }
    return value;
  }
}
