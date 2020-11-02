import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AppRoutingModule } from './app.router'
import { AppService } from './app.service';
import { MembersService } from './shared/services/members.service';
import { MembersComponent } from './members/members.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { RacingModule } from './shared/racing.module';
// Notice how both FormsModule and ReactiveFormsModule imported...choices, choices!
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MembersComponent,
    MemberDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    RacingModule
  ],
  exports: [],
  providers: [AppService, MembersService],
  bootstrap: [AppComponent, BannerComponent]
})
export class AppModule { }
