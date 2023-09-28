import { Component, OnInit } from '@angular/core';
import { ServiceInfo } from './ServiceInfo';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  searchText: string = '';
  selectedService?: ServiceInfo;
  showModel: boolean = false;
  private ASSETS_PICTURE_URL: string = '../../assets/pictures/';

  constructor() { }

  ngOnInit(): void {
  }

  onSearchKey(event: any) {
    this.searchText = event.target.value;
  }

  openModel(service: ServiceInfo) {
    this.selectedService = service;
    this.showModel = true;
  }

  closeModel() {
    this.showModel = false;
  }

  services: ServiceInfo[] = [
    {
      title: 'Prayer Service',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'St. Mary\'s Archdiocesan Prayer Group',
      registrationLink: '',
      keywords: ['prayer']
    },
    {
      title: 'Catholic Statue',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'St. Mary\'s Archdiocesan Prayer Group',
      registrationLink: '',
      keywords: ['statue', 'catholic']
    },
    {
      title: 'Live Telecast',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'Archdiocesan Youth Media',
      registrationLink: '',
      keywords: ['live', 'teleast', 'instagram', 'youtube']
    },
    {
      title: 'Drone',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'St. Thomas Media Team',
      registrationLink: '',
      keywords: ['drone', 'live', 'teleast', 'instagram', 'youtube']
    },
    {
      title: 'Choir',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'St. Cecilia Musician and Singers Group',
      registrationLink: '',
      keywords: ['song', 'choir', 'music']
    },
    {
      title: 'Income Tax filing',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'St. Mathew\'s Bankers Group',
      registrationLink: '',
      keywords: ['it', 'filing', 'income', 'tax']
    },
    {
      title: 'Posters',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'Archdiocesan Youth Media',
      registrationLink: '',
      keywords: ['poster', 'video', 'designing', 'logo']
    },
    {
      title: 'Job Consultancy',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'Christ Career Community',
      registrationLink: '',
      keywords: ['job', 'placement', 'consultancy', 'fair']
    },
    {
      title: 'Digital Media Admin',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'Archdiocesan Youth Media',
      registrationLink: '',
      keywords: ['instagram', 'facebook', 'youtube', 'digital', 'media', 'admin']
    },
    {
      title: 'Software Development',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'Bl. Carlo CS Community',
      registrationLink: '',
      keywords: ['software', 'app', 'web', 'website']
    },
    {
      title: 'Decors',
      description: 'The SGML specification distinguishes between record start characters (line feeds) and record ends (carriage returns). On the Internet, some platforms use carriage return line feed pairs for line breaks, some use just line feeds, and others just carriage returns. As a result, HTML user agents should consider both isolated line feed and carriage return characters as line breaks, with carriage return line feed pairs treated as single line breaks.',
      image: this.ASSETS_PICTURE_URL + 'DefaultService.jpg',
      maintainer: 'St. Mary\'s Archdiocesan Prayer Group',
      registrationLink: '',
      keywords: ['decor', 'decoration']
    }
  ]

}
