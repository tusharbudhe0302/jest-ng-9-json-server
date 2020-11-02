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
  // Do not convert data to Observable on service layer. Explicit convert to componet level.
  // findAllMembers() {
  //   return this.http.get(`${this.api}/api/members`).pipe(map((res) => res));
  // }

  // Convert data to Observable format on service layer.
  findAllMembersII(): Observable<Member[]> {
    return this.http.get(`${this.api}/api/members`).pipe(map((res: Member[]) => res.map((x) => x)));
  }
  findAllMembersById(id: string): Observable<Member> {
    return this.http.get(`${this.api}/api/members/${id}`).pipe(map((res: Member) => res));
  }
  createMember(member: Partial<Member>): Observable<Member> {
    return this.http.post(`${this.api}/api/members`, member).pipe(map((res: Member) => res));
  }
  editMember(id: string, member: Partial<Member>): Observable<Member> {
    return this.http.put(`${this.api}/api/members/${id}`, member).pipe(map((res: Member) => res));
  }
  deleteMember(id: string): Observable<Member> {
    return this.http.delete(`${this.api}/api/members/${id}`).pipe(map((res: Member) => res));
  }
}

