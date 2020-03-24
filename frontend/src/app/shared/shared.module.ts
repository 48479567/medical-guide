import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import {
  DateControlComponent,
  CheckboxControlComponent,
  FileControlComponent,
  RadioControlComponent,
  SelectControlComponent,
  SubmitControlComponent,
  TextareaControlComponent,
  TextboxControlComponent,
  TextboxNumberControlComponent,
  FormArrayComponent
} from './components';

const COMPONENTS = [
  FormArrayComponent,
  DateControlComponent,
  CheckboxControlComponent,
  FileControlComponent,
  RadioControlComponent,
  SelectControlComponent,
  SubmitControlComponent,
  TextareaControlComponent,
  TextboxNumberControlComponent,
  TextboxControlComponent
];

const PIPES = [

];
const DIRECTIVES = [

];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES],
})
export class SharedModule { }
