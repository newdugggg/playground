import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ChefInfoComponent } from './chef-info/chef-info.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutusService } from './aboutus.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactUsComponent, ChefInfoComponent],
  imports: [CommonModule, AboutUsRoutingModule, SharedModule],
  providers: [AboutusService]
})
export class AboutUsModule {}
