import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
import { ChefContactInfoComponent } from './chef-contact-info/chef-contact-info.component';
import { ChefFormComponent } from './chef-form/chef-form.component';
import { AuthGuard } from 'src/app/auth-gaurd.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'chef',
        children: [
          { path: '', component: ChefComponent, canActivate: [AuthGuard] },
          {
            path: 'details',
            component: ChefDetailsComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'contact',
            component: ChefContactInfoComponent,
            canActivate: [AuthGuard],
        },
          {
            path: 'ChefFormComponent',
            component: ChefFormComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ChefRoutingModule {}
