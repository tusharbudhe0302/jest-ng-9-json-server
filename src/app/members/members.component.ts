import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from '../shared/model/member';
import { MembersService } from '../shared/services/members.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  memberTitle = "Member List";
  members$: Observable<Member[]>;
  member: Member;
  allMembers: any;
  membersTest: Member[] = [];
  constructor(private membersService: MembersService) {
  }
  ngOnInit() {
    this.membersService.findAllMembers().subscribe((membersTest: Member[]) => {
      this.membersTest = membersTest;
    });
  }

}
