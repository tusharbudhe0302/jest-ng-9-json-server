import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { AppComponent } from '../app.component';
import { MembersComponent } from '../members/members.component';
import { MemberDetailsComponent } from '../member-details/member-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { MembersService } from './services/members.service';
import { TeamsService } from './services/teams.service';

@NgModule({
    declarations: [
        AppComponent,
        MembersComponent,
        MemberDetailsComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    exports: [
        AppComponent,
        MembersComponent,
        MemberDetailsComponent,
    ],
    providers: [
        MembersService,
        TeamsService,
        Location
    ],
    entryComponents: [MembersComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

}) export class RacingModule {



}