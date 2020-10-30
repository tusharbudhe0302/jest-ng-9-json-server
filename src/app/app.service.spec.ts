import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AppService,
      ],
    });
  });
  it('should get users', async(inject([HttpTestingController, AppService],
    (httpMock: HttpTestingController, apiService: AppService) => {
      expect(apiService).toBeTruthy();
    }
  )));
});
