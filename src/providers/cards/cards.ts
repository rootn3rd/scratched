import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Card } from '../../models/card';
import { SINGLE_CARD, CARD_LIST } from '../../mocks/card';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class CardsApi {

    constructor(public http: HttpClient) {
    }

    getCard(): Observable<Card> {
        return of(SINGLE_CARD);
    }

    getCards(): Observable<Array<Card>> {
        return of(CARD_LIST);
    }
}
