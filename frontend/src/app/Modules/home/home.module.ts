import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Routing
import { HomeRoutingModule } from '../../Routes/home/home-routing.module';

// Components
import { HomeComponent } from '../../Components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
