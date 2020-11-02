import { async, TestBed, ComponentFixtureAutoDetect, inject, ComponentFixture } from '@angular/core/testing';
import { MembersComponent } from './members.component';
import { RacingModule } from '../shared/racing.module';
import { Component } from '@angular/core';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RacingModule],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(MembersComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
    console.log(component);
  });
  // it(`should have as title 'Member List'`, () => {
  //   const fixture = TestBed.createComponent(MembersComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.memberTitle).toEqual('Member List');
  // });
});
