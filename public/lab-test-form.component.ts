import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-lab-test-form',
  templateUrl: './lab-test-form.component.html',
  styleUrls: ['./lab-test-form.component.scss'],
})
export class LabTestFormComponent implements OnInit {
  labTests: any[];
  testSelected: any | undefined;
  testSelectedComponent!: any | undefined;

  @Input() showDelIcon!: boolean;
  @Input() componentDetails!: any | undefined;
  @Input() tests!: any[];

  @Output() componentCreated = new EventEmitter<any>();
  @Output() selected = new EventEmitter<any>();
  @Output() deleteSelected = new EventEmitter<any>();

  constructor() {
    this.labTests = this.tests;
  }

  ngOnInit(): void {
    this.labTests = this.tests;
    setTimeout(() => {
      this.testSelectedComponent = {
        componentId: this.componentDetails?.componentId || uuidv4(),
        labTest: this.componentDetails?.labTest,
      };
      this.testSelected = this.testSelectedComponent.labTest;
      this.componentCreated.emit(this.testSelectedComponent);
    });
  }

  ngOnChanges() {
    console.log('Comming ', this.componentDetails);
    console.log('Current ', this.testSelectedComponent);
    if (this.componentDetails) {
      this.testSelectedComponent = { ...this.componentDetails };
    }
    this.testSelected = this.testSelectedComponent?.labTest;
  }

  showSelecedValue(obj: any) {
    this.testSelected = obj;
    if (this.testSelectedComponent) {
      this.testSelectedComponent.labTest = this.testSelected;
    }
    this.selected.emit(this.testSelectedComponent);
  }

  onClickDelete(test: any | undefined) {
    this.deleteSelected.emit(test);
  }
}
