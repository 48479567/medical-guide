import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textbox-control',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.sass']
})

export class TextboxControlComponent implements OnInit {
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
  @Input() maxLength = 1000;
  @Input() minLength = 0;
  @Input() type = 'text';
  @Input() matIconButtonPrefix = '';
  @Input() matIconButtonSuffix = '';
  @Input() className = '';
  @Input() disabled = null;

  @Output() clickButtonPrefix = new EventEmitter<void>();
  @Output() clickButtonSuffix = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  onClickButtonPrefix(): void {
    this.clickButtonPrefix.emit(null);
  }
  onClickButtonSuffix(): void {
    this.clickButtonSuffix.emit(null);
  }
}
