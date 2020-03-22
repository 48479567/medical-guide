import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';


const PIPES = [

];
const COMPONENTS = [

];
const DIRECTIVES = [

];

@NgModule({
  imports: [],
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
