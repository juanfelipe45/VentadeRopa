import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Rutas
import { RopaRoutingModule } from '../../Routes/ropa/ropa-routing.module';

//componentes 
import { RopaComponent } from '../../Components/home/ropa/ropa.component';


@NgModule({
  declarations: [RopaComponent],
  imports: [
    CommonModule,
    RopaRoutingModule
  ]
})
export class RopaModule { }
