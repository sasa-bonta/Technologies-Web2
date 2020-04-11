import { Component, OnInit } from '@angular/core';

@Component({
  template: '<youtube-player videoId="dQw4w9WgXcQ"></youtube-player>',
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
