import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChefInfoComponent } from './chef-info/chef-info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const AboutUsRouting: Routes = [
  {
    path: 'info',
    component: ChefInfoComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(AboutUsRouting)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
