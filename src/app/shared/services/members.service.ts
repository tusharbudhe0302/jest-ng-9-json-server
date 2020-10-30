import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  api = environment.api;

  constructor(private http: HttpClient) {
  }

  findAllMembers() {
    return this.http.get(`${this.api}/api/members`).pipe(map((res) => res));
  }
  
}
