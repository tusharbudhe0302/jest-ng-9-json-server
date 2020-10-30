import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../shared/services/members.service';
import { Members } from '../shared/interface/member.interface';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  memberTitle = "Member List";
  memberList: Members;
  constructor() {
  }
  ngOnInit() {
    // this.members.getMembers().subscribe((members) => (this.memberList = members));
  }

}
