import { DateTimeElementBase } from './date-time-element-base';
import { MomentFunc } from 'src/app/grid-cell/models/enums/moment-func.enum';

export class DateTimeElement extends DateTimeElementBase {
  func: MomentFunc;

  constructor(func: MomentFunc, options?: DateTimeElementBase) {
    super();
    this['type'] = 'datetime';
    this.func = func;
    if (options) {
      Object.assign(this, options);
    }
  }
}
