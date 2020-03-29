import { Component, OnInit, Input, Inject } from '@angular/core';
import { IInmunization } from '../../../../shared/models';
import { InmunizationService } from '../../../../core/services/inmunization.service';
import { InmunizationHttpService } from '../../../../core/http/inmunization.http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { inmunizationDetailTemplate } from './inmunization-detail.template';

@Component({
  selector: 'app-inmunization-detail',
  template: inmunizationDetailTemplate,
  styleUrls: ['./inmunization-detail.component.sass']
})
export class InmunizationDetailComponent implements OnInit {
  @Input() public inmunization: IInmunization;

  constructor(
    protected route: ActivatedRoute,
    protected inmunizationService: InmunizationService,
    protected inmunizationHttpService: InmunizationHttpService,
  ) { }

  ngOnInit(): void {
  }

}
