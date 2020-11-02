import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from '../../../environments/environment';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  api = environment.api;

  constructor(private http: HttpClient) {
  }
  findAllTeams(): Observable<Team[]> {
    return this.http.get(`${this.api}/api/teams`).pipe(map((res: Team[]) => res.map((x) => x)));
  }
  findAllTeamById(id: string) : Observable<Team> {
    return this.http.get(`${this.api}/api/teams/${id}`).pipe(map((res: Team) => res));
  }
}

