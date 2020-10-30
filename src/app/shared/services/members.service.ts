import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  /*
  * Get data from service and then convert to Oberver on Component
  findAllMembers() {
    return this.http.get(`${this.api}/api/members`).pipe(map((res) => res));
  }
  */
  /*
  * Get data from service and  convert to Oberver on service layer
  */
  findAllMembersII(): Observable<Member[]> {
    return this.http.get(`${this.api}/api/members`).pipe(map((res: Member[]) => res.map((x) => x)));
  }
}

