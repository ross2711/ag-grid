import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { NumberFormatterComponent } from './number-formatter/number-formatter.component';
import { NumericEditorComponent } from './numeric-editor/numeric-editor.component';
import { RangeFilterComponent } from './range-filter/range-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    {
      headerName: 'Price',
      field: 'price',
      editable: true,
      cellRenderer: 'numberFormatterComponent',
      cellEditor: 'numericEditorComponent',
      filter: 'rangeFilterComponent'
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

  rowData: [];

  constructor(private http: HttpClient) {}
  // Register component
  frameworkComponents = {
    numberFormatterComponent: NumberFormatterComponent,
    numericEditorComponent: NumericEditorComponent,
    rangeFilterComponent: RangeFilterComponent
  };

  ngOnInit() {
    fetch('https://api.myjson.com/bins/15psn9')
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));
  }
  // getSelectedRows() {
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   console.log('selectedNodes', selectedNodes);
  //   const selectedData = selectedNodes.map(node => node.data);
  //   console.log('selectedData', selectedData);
  //   const selectedDataStringPresentation = selectedData
  //     .map(node => node.make + ' ' + node.model)
  //     .join(', ');
  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }
}
