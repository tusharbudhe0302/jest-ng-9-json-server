import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { fail, strict } from 'assert';
import { Mock } from 'protractor/built/driverProviders';
import { environment } from 'src/environments/environment';

import { MembersService } from './members.service';
import { Member } from '../model/member';
import { MEMBERS } from './services.mock.data';
import { HttpErrorResponse } from '@angular/common/http';


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
      team: 'test',
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
  it('should update member', () => {
    const updateMemberMock: Partial<Member> = { firstname: 'fn 5', lastname: 'ln 5', team: 'team 5', jobtitle: 'job 5', status: 'active' };
    membersService.editMember(id, updateMemberMock).subscribe((member) => {
      expect(member).toHaveBeenCalledTimes(1);
      expect(member._id).toBe(id);
    });
    const req = httpTestingController.expectOne(`${api}/api/members/${id}`);
    expect(req.request.method).toEqual("PUT");
    expect(req.request.body.jobtitle).toEqual(updateMemberMock.jobtitle);
    req.flush(updateMemberMock);
  });
  it('should error on create member', () => {
    const memMemberMock: Partial<Member> = {
      lastname: 'budhe',
      jobtitle: 'NodeJS2',
      team: 'test',
      status: 'active'
    }
    membersService.createMember(memMemberMock).subscribe(() =>  fail("create member should failed"),(error:HttpErrorResponse)=>{
      expect(error.status).toBe(400);
    });
    const req = httpTestingController.expectOne(`${api}/api/members`);
    expect(req.request.method).toBe("POST");
    req.flush("failed to create member",{status:400,statusText:"Bad Request firstname,lastname,team,status, id , jobtitle required"});
  });

  afterEach(() => {
    httpTestingController.verify();
  })
});
