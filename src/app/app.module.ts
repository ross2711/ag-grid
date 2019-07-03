import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';
import { NumberFormatterComponent } from './number-formatter/number-formatter.component';
import { NumericEditorComponent } from './numeric-editor/numeric-editor.component';

@NgModule({
  declarations: [AppComponent, NumberFormatterComponent, NumericEditorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([NumberFormatterComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
