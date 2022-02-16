import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChefRoutingModule } from 'src/chef/chef-routing.module';
import { ChefModule } from 'src/chef/chef.module';
import { HomeModule } from 'src/home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderInterceptor } from './http-interceptor.service';
@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AboutUsModule,
    ChefModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
