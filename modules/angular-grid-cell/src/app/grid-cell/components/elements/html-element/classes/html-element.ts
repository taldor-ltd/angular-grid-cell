import { Element } from '../../../../models/classes/element';

export class HtmlElement extends Element {
  html: string | Function;

  constructor(html: string | Function, options?: Element) {
    super();
    this.type = 'html';
    this.html = html;
    if (options) {
      Object.assign(this, options);
    }
  }
}
