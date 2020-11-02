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
  members: Member[] = [];
  constructor(private membersService: MembersService) {
  }
  ngOnInit() {
    /** Get converted data in Observer format from service layer.
    this.membersService.findAllMembers().subscribe((members: Member[]) => {
      this.members = members;
    });
     */
    this.membersService.findAllMembersII().subscribe((members) => {
      this.members = members;
    });
  }
  editMember(member:Member){  
    console.log(`Edit memeber : ${member._id}`);
  }
  deleteMember(member:Member){
    console.log(`Delete member: ${member._id}`);
  }
  addMember(){
    console.log(`Add memeber`);
  }
  

}
