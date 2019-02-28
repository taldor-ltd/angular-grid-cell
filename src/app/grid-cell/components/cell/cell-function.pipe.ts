import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cellFunction'
})
export class CellFunctionPipe implements PipeTransform {

  transform(func: Function | string, data: any): any {

    if (typeof func === 'function') {
      if (data) {
        return func(data);
      } else {
        return func();
      }
    } else if (typeof func === 'string') {
      return func;
    } else {
      return null;
    }

  }

}
