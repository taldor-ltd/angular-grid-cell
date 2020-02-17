import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GridCellModule } from '@taldor-ltd/angular-grid-cell';

import { AppComponent } from './app.component';
import { TextElementColumnComponent } from './components/text-element-column/text-element-column.component';
import { ImageElementComponent } from './components/image-element/image-element.component';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    GridCellModule
  ],
  declarations: [
    AppComponent,
    TextElementColumnComponent,
    ImageElementComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
