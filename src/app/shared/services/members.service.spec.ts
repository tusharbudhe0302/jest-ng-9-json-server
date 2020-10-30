import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';

import { MembersService } from './members.service';

describe('MembersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        MembersService,
      ],
    });
  });
  it('should get users', async(inject([HttpTestingController, MembersService],
    (httpMock: HttpTestingController, apiService: MembersService) => {
      expect(apiService).toBeTruthy();
    }
  )));
  it('should get users',()=>{

  });
});
