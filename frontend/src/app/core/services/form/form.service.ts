import { Injectable } from '@angular/core';
import { IInputControlComplete } from 'src/app/shared/models';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Injectable()
export class FormService {
  public formGroup: FormGroup;

  constructor(
  ) { }

  public getInputControlModel(
    controlField: string): IInputControlComplete {

    return {
      controlName: controlField,
      form: this.formGroup,
      required: true
    };
  }

  public getGrpCtrl(
    field: string, formGroup: FormGroup = this.formGroup
  ): FormGroup {
    return formGroup.get(field) as FormGroup;
  }

  public getArrCtrl(
    field: string, formGroup: FormGroup = this.formGroup
  ): FormArray {
    return formGroup.get(field) as FormArray;
  }

  public getCtrl(
    field: string, formGroup: FormGroup = this.formGroup
  ): FormControl {
    return formGroup.get(field) as FormControl;
  }

  public addArrayControl(formArray: FormArray) {
    formArray.push(new FormControl('', Validators.required));
  }

  public addGroupControl( formArray: FormArray, childGroup: FormGroup): void {
    formArray.push(childGroup);
  }

}
