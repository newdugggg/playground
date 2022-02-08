import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
import { ChefContactInfoComponent } from './chef-contact-info/chef-contact-info.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'chef',
        children: [
          { path: '', component: ChefComponent },
          { path: 'details', component: ChefDetailsComponent },
          { path: 'contact', component: ChefContactInfoComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ChefRoutingModule {}
