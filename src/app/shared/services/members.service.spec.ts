import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { MembersService } from './members.service';
import { MEMBERS } from './services.mock.data';
const fakeResponseMember = [
  {
    "_id": "d7a5e240-1af3-11eb-83e3-7f9e98ee30fb",
    "firstname": "fn 1",
    "lastname": "ln 1",
    "team": "team 1",
    "jobtitle": "job 1",
    "status": "active",
    "created": "2020-10-30T21:06:56.229Z",
    "modified": "2020-10-30T21:06:56.229Z"
  },
  {
    "_id": "d7a63060-1af3-11eb-83e3-7f9e98ee30fb",
    "firstname": "fn 2",
    "lastname": "ln 2",
    "team": "team 2",
    "jobtitle": "job 2",
    "status": "active",
    "created": "2020-10-30T21:06:56.230Z",
    "modified": "2020-10-30T21:06:56.230Z"
  },
  {
    "_id": "d7a63061-1af3-11eb-83e3-7f9e98ee30fb",
    "firstname": "fn 3",
    "lastname": "ln 3",
    "team": "team 3",
    "jobtitle": "job 3",
    "status": "active",
    "created": "2020-10-30T21:06:56.232Z",
    "modified": "2020-10-30T21:06:56.232Z"
  },
  {
    "_id": "d7a6a590-1af3-11eb-83e3-7f9e98ee30fb",
    "firstname": "fn 4",
    "lastname": "ln 4",
    "team": "team 4",
    "jobtitle": "job 4",
    "status": "active",
    "created": "2020-10-30T21:06:56.234Z",
    "modified": "2020-10-30T21:06:56.234Z"
  },
  {
    "_id": "d7a6f3b0-1af3-11eb-83e3-7f9e98ee30fb",
    "firstname": "fn 5",
    "lastname": "ln 5",
    "team": "team 5",
    "jobtitle": "job 5",
    "status": "active",
    "created": "2020-10-30T21:06:56.235Z",
    "modified": "2020-10-30T21:06:56.235Z"
  }
];
describe('MembersService', () => {
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
      const member = members.find(member => member._id == '34ef6d50-1af8-11eb-9619-7bd0236f9c77');
      expect(member.jobtitle).toBe("Job 5");
    });
    const req = httpTestingController.expectOne(`${api}/api/members`);
    expect(req.request.method).toBe("GET");
    req.flush(Object.values(MEMBERS));
    httpTestingController.verify();
  });
  //   let coursesService: CoursesService,
  //   httpTestingController: HttpTestingController;
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //       imports: [HttpClientTestingModule],
  //       providers: [
  //           CoursesService
  //       ]
  //   });
  //   coursesService = TestBed.inject(CoursesService);
  //   httpTestingController = TestBed.inject(HttpTestingController);
  // });
  // it("Should retrive all courses", () => {
  //   coursesService.findAllCourses()
  //       .subscribe((courses) => {
  //           expect(courses).toBeTruthy('No courses resturned.');
  //           expect(courses.length).toBe(12, "incorrect number of courses");
  //           const course = courses.find(course => course.id == 12);
  //           expect(course.titles.description).toBe("Angular Testing Course");
  //       });
  //   const req = httpTestingController.expectOne('/api/courses');
  //   expect(req.request.method).toBe("GET");
  //   req.flush({ payload: Object.values(COURSES) });
  // });
});
