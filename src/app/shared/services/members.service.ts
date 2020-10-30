import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  api = environment.api;

  constructor(private http: HttpClient,private appService:AppService) {
  }

}
