import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'main',
    loadChildren: () => import('./modules/main/main.module')
                          .then(mod => mod.MainModule),
    canActivate: [AuthGuard]
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
