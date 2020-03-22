import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
      { path: 'inmunization',
        loadChildren: () => import('./inmunization/inmunization.module')
                              .then(mod => mod.InmunizationModule)
      },
      { path: 'temperature',
        loadChildren: () => import('./temperature/temperature.module')
                              .then(mod => mod.TemperatureModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
