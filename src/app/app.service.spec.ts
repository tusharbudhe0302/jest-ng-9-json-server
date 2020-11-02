import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

describe('AppService', () => {
  let appService: AppService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AppService,
      ],
    });
    appService = TestBed.inject(AppService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('should initiate service', () => {
      expect(appService).toBeTruthy();
    });
});
