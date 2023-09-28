import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { LEADERS } from './team-data';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamData: Data;

  constructor(private route: ActivatedRoute) {
    this.teamData = this.route.snapshot.data;
    if (!Object.keys(this.teamData).length) {
      this.teamData = LEADERS;
    }
  }

  ngOnInit(): void {
  }

}
