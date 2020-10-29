import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailsComponent } from './member-details.component';

describe('MemberDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberDetailsComponent], 
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MemberDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Members Details'`, () => {
    const fixture = TestBed.createComponent(MemberDetailsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Members Details');
  });
});
