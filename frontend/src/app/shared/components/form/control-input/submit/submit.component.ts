import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit-control',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})

export class SubmitControlComponent implements OnInit {
  @Input() label = '';

  constructor() { }

  ngOnInit() { }
}

