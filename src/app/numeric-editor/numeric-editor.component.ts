import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-numeric-editor',
  template: `
    <input (keypress)="onKeyPress($event)" (keydown)="onKeyDown($event)" />
  `
})
export class NumericEditorComponent implements AfterViewInit {
  @ViewChild('i', { static: true }) textInput;
  params;

  agInit(params: any): void {
    this.params = params;
  }

  getValue() {
    return this.textInput.nativeElement.value;
  }

  onKeyPress(event) {
    if (!isNumeric(event)) {
      event.preventDefault();
    }

    function isNumeric(ev) {
      return /\d/.test(ev.key);
    }
  }

  onKeyDown(event) {
    if (event.keyCode === 39 || event.keyCode === 37) {
      event.stopPropagation();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.textInput.nativeElement.focus();
    });
  }
}
