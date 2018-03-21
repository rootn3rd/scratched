import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CardsApi } from '../../providers/cards/cards';
import { Card } from '../../models/card';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage implements OnInit {

  cardList: Array<Card> = [];

  constructor(public navCtrl: NavController, public cardsApi: CardsApi) {
  }

  ngOnInit() {
    this.cardsApi.getCards().subscribe(list => {
      console.log('Cards fetched!');
      this.cardList = list;// [].concat([list[0]]);
    });
  }
}
