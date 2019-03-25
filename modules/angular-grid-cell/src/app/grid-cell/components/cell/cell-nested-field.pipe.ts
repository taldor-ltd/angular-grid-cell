import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cellNestedField'
})
export class CellNestedFieldPipe implements PipeTransform {

  transform(data: any, field: string): any {
    const fields = field.split('.');
    let value = data;
    for (let i = 0, len = fields.length; i < len; ++i) {
      if (value == null) {
        return null;
      }
      value = value[fields[i]];
    }
    return value;
  }

}
