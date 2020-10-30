import { async, TestBed, ComponentFixtureAutoDetect, inject } from '@angular/core/testing';
import { MembersComponent } from './members.component';
import { MembersService } from '../shared/services/members.service';

class MockMembersService {
  getMember = []
}
describe('MembersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembersComponent],
      providers: [
        { provide: MembersService, useValue: true },
      ],
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
    expect(app.memberTitle).toEqual('Member List');
  });
});
