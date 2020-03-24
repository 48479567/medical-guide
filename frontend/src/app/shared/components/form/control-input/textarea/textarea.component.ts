import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea-control',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})

export class TextareaControlComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() form: FormGroup;
  @Input() controlName = '';
  @Input() required = false;
  @Input() errorMessage = '';
  @Input() matHintEnd = '';
  @Input() matHintStart = '';
  @Input() matIconPrefix = '';
  @Input() matPrefix = '';
  @Input() matSuffix = '';
  @Input() matIconSuffix = '';
  @Input() maxLength = Infinity;
  @Input() minLength = 0;

  constructor() { }

  ngOnInit() { }
}
