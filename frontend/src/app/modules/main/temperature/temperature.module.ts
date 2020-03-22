import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperatureRoutingModule } from './temperature-routing.module';
import { TemperatureComponent } from './temperature.component';
import { SharedModule } from '../../../shared/shared.module';
import { TemperatureListComponent } from './temperature-list/temperature-list.component';


@NgModule({
  declarations: [TemperatureComponent, TemperatureListComponent],
  imports: [
    TemperatureRoutingModule,
    SharedModule
  ]
})
export class TemperatureModule { }
