import { Component,NgModule  } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const routes: Routes = [
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
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }