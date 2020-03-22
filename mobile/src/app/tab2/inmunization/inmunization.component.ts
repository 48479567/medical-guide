import { Component, OnInit } from '@angular/core';
import { InmunizationService } from '../../core/services/inmunization.service';
import { IInmunization } from '../../shared/models';

@Component({
  selector: 'app-inmunization',
  templateUrl: './inmunization.component.html',
  styleUrls: ['./inmunization.component.css']
})
export class InmunizationComponent implements OnInit {
  inmunization: IInmunization;

  constructor(
    private inmunizationService: InmunizationService
  ) { }

  ngOnInit() {
    this.inmunization = this.inmunizationService.getSelectedInmunization();
  }

}