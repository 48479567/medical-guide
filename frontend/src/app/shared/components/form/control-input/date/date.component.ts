import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-control',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})

export class DateControlComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = 'Choose a date';
  @Input() form: FormGroup;
  @Input() controlName = '';
  @Input() errorMessage = '';
  @Input() required = false;

  constructor() { }

  ngOnInit() { }
}
