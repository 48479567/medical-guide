import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemperatureComponent } from './temperature.component';
import { TemperatureListComponent } from './temperature-list/temperature-list.component';


const routes: Routes = [
  { path: '', component: TemperatureComponent, children: [
      { path: '', component: TemperatureListComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemperatureRoutingModule { }
