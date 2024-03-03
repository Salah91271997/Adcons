import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'services',
})
export class ServicesPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 65) {
      return value.slice(0, 60) + ' ...';
    }
    return value;
  }
}
