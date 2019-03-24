import { MomentPipe } from '../enums/moment-pipe.enum';
import { Element } from './element';
import { DateTimeElementOptions } from './date-time-element-options';

export class DateTimeElement extends Element {
  pipe: MomentPipe;

  constructor(pipe: MomentPipe, options?: DateTimeElementOptions) {
    super();
    this.type = 'datetime';
    this.pipe = pipe;
    if (options) {
      Object.assign(this, options);
    }
  }
}
