import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Member } from '../shared/model/member';



@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  title = "Members Details";
  constructor() {
  }

  ngOnInit(): void {
  }



}
