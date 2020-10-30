import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { routes } from './app.router'
import { AppService } from './app.service';
import { MembersService } from './shared/services/members.service';
import { MembersComponent } from './members/members.component';


// Notice how both FormsModule and ReactiveFormsModule imported...choices, choices!
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false, onSameUrlNavigation: 'reload' }),
  ],
  exports: [],
  providers: [AppService, MembersService],
  bootstrap: [AppComponent, BannerComponent]
})
export class AppModule { }
