import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AppComponent } from './app.component';
import { routes } from './app.router';

describe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [
                AppComponent,
                MembersComponent,
                MemberDetailsComponent
            ],
            providers: [
                Location
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
        });
        router = await TestBed.inject(Router);
        location = await TestBed.inject(Location);
        fixture = await TestBed.createComponent(AppComponent);
        fixture.ngZone.run(()=>{
            router.initialNavigation();
        });
    });
    it('should "" to navigate redirect you to /members', fakeAsync(() => {
        fixture.ngZone.run(() => {
            router.navigate(['']);
            fixture.autoDetectChanges();
            fixture.whenStable().then(() => {
                expect(location.path()).toBe('/members');
            });
        });
    }));
    it('should "/" to navigate redirect you to /members', fakeAsync(() => {
        fixture.ngZone.run(() => {
            router.navigate(['/']);
            fixture.autoDetectChanges();
            fixture.whenStable().then(() => {
                expect(location.path()).toBe('/members');
            });
        });
    }));
    it('should "/member" to navigate redirect you to /member', fakeAsync(() => {
        fixture.ngZone.run(() => {
            router.navigate(['/member']);
            fixture.autoDetectChanges();
            fixture.whenStable().then(() => {
                expect(location.path()).toBe('/member');
            });
        });
    }));
    it('should "/member/:id" to navigate redirect you to /member/:id', fakeAsync(() => {
        fixture.ngZone.run(() => {
            router.navigate(['/member/15']);
            fixture.autoDetectChanges();
            fixture.whenStable().then(() => {
                expect(location.path()).toBe('/member/15');
            });
        });
    }));
});