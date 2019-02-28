import { MomentPipe } from '../enums/moment-pipe.enum';
import { IColumnElement } from '../interfaces/IColumnElement';
import { IDateTimeColumnElementOptions } from '../interfaces/IDateTimeColumnElementOptions';

export class DateTimeColumnElement implements IColumnElement {
  type: string;
  pipe: MomentPipe;

  constructor(pipe: MomentPipe, options?: IDateTimeColumnElementOptions) {
    this.type = 'datetime';
    this.pipe = pipe;
    if (options) {
      Object.assign(this, options);
    }
  }
}
