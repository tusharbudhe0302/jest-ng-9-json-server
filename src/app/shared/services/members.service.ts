import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from '../../../environments/environment';
import { Member } from '../model/member';




@Injectable({
  providedIn: 'root'
})
export class MembersService {
  api = environment.api;

  constructor(private http: HttpClient) {
  }
  findAllMembers(): Observable<Member[]> {
    return this.http.get('/api/members').pipe(map(res=> res['members'] ));
   
  }

}
