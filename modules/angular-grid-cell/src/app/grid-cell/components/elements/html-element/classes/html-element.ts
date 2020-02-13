import { Element } from '../../../../models/classes/element';
import { Type } from '@angular/core';

export class HtmlElement extends Element {
  html: string | Function;
  modules: Type<any> | Type<any>[];
  $scope: any;

  constructor(scope: any, html: string | Function, modules?: Type<any> | Type<any>[], options?: Element) {
    super();
    this.$scope = scope;
    this.type = 'html';
    this.html = html;
    this.modules = modules;
    if (options) {
      Object.assign(this, options);
    }
  }
}
