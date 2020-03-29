import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RopaRoutingModule } from '../../Routes/ropa/ropa-routing.module';
import { RopaComponent } from '../../Components/home/ropa/ropa.component';


@NgModule({
  declarations: [RopaComponent],
  imports: [
    CommonModule,
    RopaRoutingModule
  ]
})
export class RopaModule { }
