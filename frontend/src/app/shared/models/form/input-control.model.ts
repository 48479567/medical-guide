import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

export interface IInput {
  label?: string;
}

export interface IInputControl extends IInput {
  form: FormGroup;
  controlName: string;
  errorMessage?: string;
}

export interface ISelectOption {
  key: string;
  value: string;
}

export interface IDataSchemaOption {
  _id: string;
  anchorValue: string;
  imageSrc?: string;
}

export interface ICheckboxInputControl extends IInputControl {
  labelPosition: 'after' | 'before';
  checked: boolean;
  indeterminate: boolean;
}

export interface ICharacterInputControl extends IInputControl {
  placeholder?: string;
  required: boolean;
  className?: string;
}

export interface IInputControlComplete extends ICharacterInputControl {
  matHintEnd?: string;
  matHintStart?: string;
  matIconPrefix?: string;
  matPrefix?: string;
  matSuffix?: string;
  matIconSuffix?: string;
}

export interface IRadioInputControl extends IInputControl {
  radioButtons: ISelectOption[];
}

export interface ISelectInputControl extends ICharacterInputControl {
  dataOptions: IDataSchemaOption[];
  value?: string;
  matIconPrefix?: string;
}


export interface ITextareaInputControl extends IInputControlComplete {
  maxLength: number;
  minLength: number;
}

export interface ITextboxInputControl {
  max: number;
  min: number;
  type: string;
  matIconButtonPrefix: string;
  matIconButtonSuffix: string;
  className: string;
  disabled: any | null;

  clickButtonPrefix?: EventEmitter<void>;
  clickButtonSuffix?: EventEmitter<void>;

}

export interface TextboxControlNumberInput extends ITextboxInputControl {
  type: 'number';
}

