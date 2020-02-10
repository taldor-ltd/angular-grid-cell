import { Component, Input, OnInit, ComponentRef, OnDestroy, ViewContainerRef, Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories, ReflectiveInjector } from '@angular/core';
import { BaseElementComponent } from '../../../models/classes/base-element-component';
import { HtmlElement } from './classes/html-element';
import { TestModule } from 'src/app/test/test.module';

export function createComponentFactory(compiler: Compiler, metadata: Component): Promise<ComponentFactory<any>> {
  const cmpClass = class DynamicComponent {};
  const decoratedCmp = Component(metadata)(cmpClass);

  @NgModule({
    imports: [ TestModule ],
    declarations: [decoratedCmp]
  })
  class DynamicHtmlModule { }

  return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
     .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
      return moduleWithComponentFactory.componentFactories.find(x => x.componentType === decoratedCmp);
    });
}

@Component({
  selector: 'tld-html-element',
  templateUrl: './html-element.component.html',
  styleUrls: ['./html-element.component.css']
})
export class HtmlElementComponent extends BaseElementComponent implements OnInit, OnDestroy {
  cmpRef: ComponentRef<any>;
  @Input() element: HtmlElement;
  @Input() data: any;

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler) {
    super();
  }

  ngOnInit(): void {
    let template;

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    if (typeof(this.element.html) === 'function') {
      template = this.element.html(this.data);
    } else {
      template = this.element.html;
    }

    const compMetadata = new Component({
      selector: 'dynamic-html',
      template: template
    });

    createComponentFactory(this.compiler, compMetadata)
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
        this.cmpRef = this.vcRef.createComponent(factory, 0, injector, []);
      });
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
