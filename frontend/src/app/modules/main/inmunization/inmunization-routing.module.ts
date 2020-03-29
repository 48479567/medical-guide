import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InmunizationComponent } from './inmunization.component';
import { InmunizationListComponent } from './inmunization-list/inmunization-list.component';
import { InmunizationFormComponent } from './inmunization-form/inmunization-form.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';


const inmunizationRoutes: Routes = [
  { path: '', component: InmunizationComponent, children: [
      { path: '', redirectTo: 'inmunization-list', pathMatch: 'full' },
      { path: 'inmunization-list', component: InmunizationListComponent },
      { path: 'inmunization-form', component: InmunizationFormComponent },
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(inmunizationRoutes)],
  exports: [RouterModule]
})
export class InmunizationRoutingModule { }
