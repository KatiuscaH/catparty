import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  party = 'Party';
  urlImage = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';

  constructor() {
    if (this.party === 'Party') {
      this.urlImage = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';
    }
  }

  pressButton() {
    if (this.party === 'Party') {
      this.party = 'perreo'
      this.urlImage = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';
    } else {
      if(this.party==='perreo')
      this.party = 'Party'
      this.urlImage = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';
    }
  }
} 