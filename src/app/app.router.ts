import { Component } from "@angular/core";
import { Routes } from "@angular/router";

import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'members',
        pathMatch: 'full'
    },
    {
        path: 'member',
        component: MemberDetailsComponent
    },
    {
        path: 'member/:id',
        component: MemberDetailsComponent
    },
    {
        path: 'members',
        component: MembersComponent
    }
];
