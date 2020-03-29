import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      },
      {
        path: 'sign-in',
        loadChildren: () => import('../../Modules/sign-in/sign-in.module').then((m => m.SignInModule))
      },
      {
        path: 'ropa',
        loadChildren: () => import('../../Modules/ropa/ropa.module').then((m => m.RopaModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
