import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InmunizationComponent } from './inmunization.component';
import { InmunizationListComponent } from './inmunization-list/inmunization-list.component';
import { InmunizationDetailComponent } from './inmunization-detail/inmunization-detail.component';
import { InmunizationCreateComponent } from './inmunization-create/inmunization-create.component';


const routes: Routes = [
  { path: '', component: InmunizationComponent, children: [
      { path: '', redirectTo: 'inmunization-list', pathMatch: 'full' },
      { path: 'inmunization-list', component: InmunizationListComponent },
      { path: 'inmunization-detail/:id', component: InmunizationDetailComponent },
      { path: 'inmunization-create', component: InmunizationCreateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmunizationRoutingModule { }
