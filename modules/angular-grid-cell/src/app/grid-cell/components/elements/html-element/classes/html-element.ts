import { Element } from '../../../../models/classes/element';
import { Type } from '@angular/core';

export class HtmlElement extends Element {
  html: string | Function;
  $scope: any;
  modules: Type<any> | Type<any>[];

  constructor(html: string | Function, scope: any, modules?: Type<any> | Type<any>[], options?: Element) {
    super();
    this.type = 'html';
    this.html = html;
    this.$scope = scope;
    this.modules = modules;
    if (options) {
      Object.assign(this, options);
    }
  }
}
