import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
    selector: 'cards-list',
    templateUrl: 'cards-list.component.html',
    styleUrls: ['/src/components/cards-list/cards-list.component.scss']
})

export class CardsListComponent implements OnInit {

    @Input('cards')
    cardList: Array<Card> = [];

    constructor() { }

    ngOnInit() {

    }

    scratchCompleted(card) {
        console.log('Scratch completed !!', card);
    }

    scratching(event, card) {
        console.log('Scratching percent :', event.percent, card);
    }
}