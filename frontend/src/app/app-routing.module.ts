import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',
    loadChildren: () => import('./modules/main/main.module')
                          .then(mod => mod.MainModule)
  },
  { path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
                          .then(mod => mod.AuthModule)
  },
  {
    path: '**', redirectTo: 'auth', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
