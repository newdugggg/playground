import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule,FormsModule],
})
export class HomeModule {}
