import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {

  scratchCardOptions = null;
  constructor(public navCtrl: NavController) {

    this.scratchCardOptions = {
      containerWidth: 350,
      containerHeight: 350,
      scratchType: 2, //0: BRUSH,1:SPRAY,2: CIRCLE
      imageForwardSrc: 'assets/img/scratchcard.jpg',
      imageBackgroundSrc: 'assets/img/result.png',
      clearZoneRadius: 40,
      nPoints: 2,
      pointSize: 1
    };
  }


  scratchCompleted() {
    console.log('Scratch completed !!')
  }

  scratching(event) {
    console.log('Scratching percent :', event.percent);
  }
}
