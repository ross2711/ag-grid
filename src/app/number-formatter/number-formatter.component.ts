import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-formatter',
  templateUrl: './number-formatter.component.html',
  styleUrls: ['./number-formatter.component.scss']
})
export class NumberFormatterComponent implements OnInit {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  constructor() {}

  ngOnInit() {}
}
