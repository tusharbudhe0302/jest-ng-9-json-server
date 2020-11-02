import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { strict } from 'assert';
import { Mock } from 'protractor/built/driverProviders';
import { environment } from 'src/environments/environment';

import { MembersService } from './members.service';
import { Member } from '../model/member';
import { MEMBERS } from './services.mock.data';


describe('MembersService', () => {
  const id = '34ef6d50-1af8-11eb-9619-7bd0236f9c77';
  let membersService: MembersService,
    httpTestingController: HttpTestingController;
  const api = environment.api;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        MembersService,
      ],
    });
    membersService = TestBed.inject(MembersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('should find all members', () => {
    membersService.findAllMembersII().subscribe((members) => {
      expect(members).toHaveBeenCalledTimes(1);
      const member = members.find(member => member._id == id);
      expect(member.jobtitle).toBe("Job 5");
    });
    const req = httpTestingController.expectOne(`${api}/api/members`);
    expect(req.request.method).toBe("GET");
    req.flush(Object.values(MEMBERS));
    httpTestingController.verify();
  });
  it('should find member by id', () => {
    membersService.findAllMembersById(id).subscribe((member) => {
      expect(member).toHaveBeenCalledTimes(1);
      expect(member.jobtitle).toBe("Job 5");
    });
    const req = httpTestingController.expectOne(`${api}/api/members/${id}`);
    expect(req.request.method).toBe("GET");
    req.flush(Object.values(MEMBERS[4]));
    httpTestingController.verify();
  });

  it('should create member', () => {
    const memMemberMock: Partial<Member> = {
      firstname: 'tushar',
      lastname: 'budhe',
      jobtitle: 'NodeJS',
      status: 'active'
    }
    membersService.createMember(memMemberMock).subscribe((member) => {
      expect(member).toHaveBeenCalledTimes(1);
    });
    const req = httpTestingController.expectOne(`${api}/api/members`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body.jobtitle).toBe("NodeJS");
    req.flush(Object.values(memMemberMock));
  });
  // it('should update member', () => {
  //   const update5Mock : Partial<Member> = MEMBERS[5];
  //   update5Mock.jobtitle = 'Update job 5';
  //   membersService.editMember(id, update5Mock).subscribe((member) => {
  //     expect(member).toHaveBeenCalledTimes(1);
  //   });
  //   const req = httpTestingController.expectOne(`${api}/api/members/${id}`);
  //   expect(req.request.method).toBe("PUT");
  //   expect(req.request.body.jobtitle).toBe(id);;
  //   req.flush(Object.values(update5Mock));
  // });
  afterEach(() => {
    httpTestingController.verify();
  })
});
