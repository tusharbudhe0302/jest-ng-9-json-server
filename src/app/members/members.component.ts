import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../shared/services/members.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  memberTitle = "Member List";

  constructor(private membersService:MembersService) {
  }
  ngOnInit() {
    this.membersService.findAllMembers().subscribe((members) => console.log(members));
  }

}
