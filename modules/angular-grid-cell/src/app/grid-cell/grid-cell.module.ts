import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellComponent } from './components/cell/cell.component';
import { CellFunctionPipe } from './components/cell/cell-function.pipe';
import { GroupByPipe } from './components/cell/group-by.pipe';
import { TextElementComponent } from './components/elements/text-element/text-element.component';
import { ButtonElementComponent } from './components/elements/button-element/button-element.component';
import { ImageElementComponent } from './components/elements/image-element/image-element.component';
import { IconElementComponent } from './components/elements/icon-element/icon-element.component';
import { DateTimeElementComponent } from './components/elements/date-time-element/date-time-element.component';
import { HtmlElementComponent } from './components/elements/html-element/html-element.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SafeStylePipe } from './pipes/safe-style.pipe';
import { DefaultGridCellConfig } from './config/default-config';
import { GridCellConfig } from './config/grid-cell-config';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CellComponent
  ],
  declarations: [
    CellComponent,
    CellFunctionPipe,
    // SafeHtmlPipe,
    // SafeStylePipe,
    GroupByPipe,
    TextElementComponent,
    ButtonElementComponent,
    ImageElementComponent,
    IconElementComponent,
    DateTimeElementComponent,
    HtmlElementComponent
  ],
  providers: [
    {
      provide: GridCellConfig,
      useClass: DefaultGridCellConfig
    }
  ]
})
export class GridCellModule {
  static forRoot(config?: GridCellConfig): ModuleWithProviders {
    return {
      ngModule: GridCellModule,
      providers: [
        config ? {
          provide: GridCellConfig,
          useValue: config
        } : {
          provide: GridCellConfig,
          useClass: DefaultGridCellConfig
        }
      ]
    };
  }
}
