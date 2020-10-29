import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersComponent } from './members.component';

describe('MembersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembersComponent], 
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MembersComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Member List'`, () => {
    const fixture = TestBed.createComponent(MembersComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Member List');
  });
});
