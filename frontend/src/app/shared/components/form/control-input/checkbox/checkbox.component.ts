import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-control',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxControlComponent implements OnInit {
  @Input() label = '';
  @Input() labelPosition: 'after' | 'before' = 'before';
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() form: FormGroup;
  @Input() controlName = '';
  @Input() errorMessage = '';

  constructor() { }

  ngOnInit() {

  }

}
