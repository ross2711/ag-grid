import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { NumberFormatterComponent } from './number-formatter/number-formatter.component';
import { NumericEditorComponent } from './numeric-editor/numeric-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;
  title = 'app';

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    {
      headerName: 'Price',
      field: 'price',

      /* enable editing */
      editable: true,

      /* specify custom cell renderer */
      cellRenderer: 'numberFormatterComponent',
      /* custom cell editor */
      cellEditor: 'numericEditorComponent'
    }
  ];

  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  rowData: any;

  constructor(private http: HttpClient) {}
  // Register component
  frameworkComponents = {
    numberFormatterComponent: NumberFormatterComponent,
    /* custom cell editor component*/
    numericEditorComponent: NumericEditorComponent
  };

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log('selectedNodes', selectedNodes);
    const selectedData = selectedNodes.map(node => node.data);
    console.log('selectedData', selectedData);
    const selectedDataStringPresentation = selectedData
      .map(node => node.make + ' ' + node.model)
      .join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
