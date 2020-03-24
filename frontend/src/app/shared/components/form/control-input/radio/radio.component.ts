import { Component, OnInit, Input } from '@angular/core';
import { ISelectOption } from '../../../../../shared/models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-control',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})

export class RadioControlComponent implements OnInit {
  @Input() radioButtons: ISelectOption[] = [];
  @Input() form: FormGroup;
  @Input() controlName = '';
  @Input() errorMessage = '';

  constructor() { }

  ngOnInit() { }
}
