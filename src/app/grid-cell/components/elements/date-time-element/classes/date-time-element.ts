import { MomentPipe } from 'src/app/grid-cell/models/enums/moment-pipe.enum';
import { DateTimeElementBase } from './date-time-element-base';

export class DateTimeElement extends DateTimeElementBase {
  pipe: MomentPipe;

  constructor(pipe: MomentPipe, options?: DateTimeElementBase) {
    super();
    this['type'] = 'datetime';
    this.pipe = pipe;
    if (options) {
      Object.assign(this, options);
    }
  }
}
