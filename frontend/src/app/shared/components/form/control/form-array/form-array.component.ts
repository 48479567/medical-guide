import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.sass']
})
export class FormArrayComponent implements OnInit {

  @Input() public formArray: FormArray;
  @Input() public formArrayName: string;
  @Input() public canAdd = false;
  @Input() public formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  public addControl(): void {
    this.formArray.push(new FormControl('', Validators.required));
  }

  public removeControl(index: number): void {
    this.formArray.removeAt(index);
  }

}
