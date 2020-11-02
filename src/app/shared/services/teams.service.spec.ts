import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { strict } from 'assert';
import { environment } from 'src/environments/environment';

import { TeamsService } from './teams.service';
import { TEAMS } from './services.mock.data';

describe('TeamsService', () => {
  const id = '6a5885d0-1af8-11eb-b390-1fcbc5d538a1';
  let teamsService: TeamsService,
    httpTestingController: HttpTestingController;
  const api = environment.api;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TeamsService,
      ],
    });
    teamsService = TestBed.inject(TeamsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('should find all teams', () => {
    teamsService.findAllTeams().subscribe((teams) => {
      expect(teams).toHaveBeenCalledTimes(1);
      const team = teams.find(team => team._id == id);
      expect(team.teamname).toBe("team 5");
    });
    const req = httpTestingController.expectOne(`${api}/api/teams`);
    expect(req.request.method).toBe("GET");
    req.flush(Object.values(TEAMS));
  });
  it('should find team by id', () => {
    teamsService.findAllTeamById(id).subscribe((team) => {
      expect(team).toHaveBeenCalledTimes(1);
      expect(team.teamname).toBe("team 5");
    });
    const req = httpTestingController.expectOne(`${api}/api/teams/${id}`);
    expect(req.request.method).toBe("GET");
    req.flush(Object.values(TEAMS[4]));
  });
  afterEach(()=>{
    httpTestingController.verify();
  })
});
