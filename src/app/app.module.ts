import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';
import { NumberFormatterComponent } from './number-formatter/number-formatter.component';
import { NumericEditorComponent } from './numeric-editor/numeric-editor.component';
import { RangeFilterComponent } from './range-filter/range-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberFormatterComponent,
    NumericEditorComponent,
    RangeFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([
      NumberFormatterComponent,
      NumericEditorComponent,
      RangeFilterComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
