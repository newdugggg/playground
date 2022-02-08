import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './about-us/contact-us/contact-us.component';
import { HomeComponent } from 'src/home/home.component';
import { PageNotFoundComponent } from 'src/home/page-not-found/page-not-found.component';

const BasicRoutes: Routes = [
  { path: 'profile/:id/:name', component: ProfileComponent},
  { path: '', component: ContactUsComponent },
  { path: 'info', component: ContactUsComponent },
  { path: 'home', component: HomeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'home-comp', redirectTo: 'home' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(BasicRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
