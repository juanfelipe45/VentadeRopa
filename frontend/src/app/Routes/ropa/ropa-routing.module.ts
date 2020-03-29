import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RopaComponent } from 'src/app/Components/home/ropa/ropa.component';


const routes: Routes = [
  {
    path: '',
    component: RopaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RopaRoutingModule { }
