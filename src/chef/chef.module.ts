import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefComponent } from './chef/chef.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
import { ChefContactInfoComponent } from './chef-contact-info/chef-contact-info.component';
import { ChefRoutingModule } from './chef-routing.module';
import { ChefHomeComponent } from './chef-home/chef-home.component';



@NgModule({
  declarations: [
    ChefComponent,
    ChefDetailsComponent,
    ChefContactInfoComponent,
    ChefHomeComponent
  ],
  imports: [
    CommonModule,
    ChefRoutingModule
  ]
})
export class ChefModule { }
