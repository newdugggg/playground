import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ChefComponent } from './chef/chef.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
import { ChefContactInfoComponent } from './chef-contact-info/chef-contact-info.component';
import { ChefRoutingModule } from './chef-routing.module';
import { ChefHomeComponent } from './chef-home/chef-home.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ButtonModule } from 'primeng/button';
import { ChefFormComponent } from './chef-form/chef-form.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ColorDirective } from './color.directive';
import { TrimDirective } from './trim.directive';
import { UpperCasePipe } from './upper-case.pipe';

@NgModule({
  declarations: [
    ChefComponent,
    ChefDetailsComponent,
    ChefContactInfoComponent,
    ChefHomeComponent,
    ChefFormComponent,
    ColorDirective,
    TrimDirective,
    UpperCasePipe,
  ],
  imports: [
    CommonModule,
    ChefRoutingModule,
    NzButtonModule,
    ButtonModule,
    NzInputModule,
    FormsModule,
    NzRadioModule,
    NzSelectModule,
    ReactiveFormsModule,
  ],
  providers: [UpperCasePipe, DatePipe],
})
export class ChefModule {}
