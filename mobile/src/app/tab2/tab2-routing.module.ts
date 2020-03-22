import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Tab2Page } from "./tab2.page";
import { InmunizationsComponent } from "./inmunizations/inmunizations.component";
import { InmunizationComponent } from "./inmunization/inmunization.component";

const Tab2Routes: Routes = [
  { path: '',  component: Tab2Page, children: [
    { path: '', component: InmunizationsComponent },
    { path: 'inmunization', component: InmunizationComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(Tab2Routes)],
  exports: [RouterModule]
})
export class Tab2RoutingModule { }