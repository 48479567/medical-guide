import { NgModule } from '@angular/core';

import { InmunizationRoutingModule } from './inmunization-routing.module';
import { InmunizationComponent } from './inmunization.component';
import { SharedModule } from '../../../shared/shared.module';
import { InmunizationListComponent } from './inmunization-list/inmunization-list.component';
import { InmunizationDetailComponent } from './inmunization-detail/inmunization-detail.component';
import { InmunizationCreateComponent } from './inmunization-create/inmunization-create.component';


@NgModule({
  declarations: [
    InmunizationComponent,
    InmunizationListComponent,
    InmunizationDetailComponent,
    InmunizationCreateComponent
  ],
  imports: [
    SharedModule,
    InmunizationRoutingModule,
  ]
})
export class InmunizationModule { }
