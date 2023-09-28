import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navBarMenu = [
    {
      name: 'Desking',
      link: ''
    },
    {
      name: 'Council',
      link: ''
    },
    {
      name: 'Services',
      link: 'services'
    },
    {
      name: 'Calendar',
      link: ''
    },
    {
      name: 'Feed',
      link: ''
    }
  ]

  isMenuOpen: boolean = false;
  isFullScreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.isFullScreen = window.innerWidth > 1007;
    this.isMenuOpen = this.isFullScreen;
  }

  clickMenu(): void {
    this.isMenuOpen = this.isFullScreen ? true : !this.isMenuOpen;
  }

}
