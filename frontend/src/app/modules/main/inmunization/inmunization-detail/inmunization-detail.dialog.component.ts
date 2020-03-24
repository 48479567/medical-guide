import { Component, Inject, OnInit } from '@angular/core';
import { InmunizationDetailComponent } from './inmunization-detail.component';
import { ActivatedRoute } from '@angular/router';
import { InmunizationService } from 'src/app/core/services/inmunization.service';
import { InmunizationHttpService } from 'src/app/core/http/inmunization.http.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IInmunization } from 'src/app/shared/models';
import { inmunizationDetailTemplate } from './inmunization-detail.template';

@Component({
  selector: 'app-inmunization-detail-dialog',
  template: inmunizationDetailTemplate,
  styleUrls: ['./inmunization-detail.component.sass']
})
export class InmunizationDetailDialogComponent
  extends InmunizationDetailComponent
  implements OnInit {

  inmunization: IInmunization;

  constructor(
    protected route: ActivatedRoute,
    protected inmunizationService: InmunizationService,
    protected inmunizationHttpService: InmunizationHttpService,
    @Inject(MAT_DIALOG_DATA) public data: IInmunization
  ) {
    super(route, inmunizationService, inmunizationHttpService);
  }

  ngOnInit(): void {
    if (this.data) {
      this.inmunization = this.data;
    }
  }
}
