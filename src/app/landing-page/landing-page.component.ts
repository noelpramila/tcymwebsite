import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  strategy: string = 'strategy';
  donation: string = 'donation';

  constructor() { }

  ngOnInit(): void {
  }

}
