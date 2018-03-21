import { Card, SCRATCH_TYPE, CARD_TYPE } from '../models/card';

export const SINGLE_CARD: Card = {
    cardId: 1,
    cardName: 'Test Card',
    cardType: CARD_TYPE.Image,
    cardMessage: null,
    containerWidth: 350,
    containerHeight: 350,
    scratchType: SCRATCH_TYPE.CIRCLE,
    imageForwardSrc: 'assets/img/scratchcard.jpg',
    imageBackgroundSrc: 'assets/img/result.png',
    clearZoneRadius: 40,
    nPoints: 2,
    pointSize: 1
}

export const CARD_LIST: Array<Card> = [
    {
        cardId: 1,
        cardName: 'Card 1',
        cardType: CARD_TYPE.Text,
        cardMessage: 'This is a test message',
        containerWidth: 350,
        containerHeight: 350,
        scratchType: SCRATCH_TYPE.CIRCLE,
        imageForwardSrc: 'assets/img/scratchcard.jpg',
        imageBackgroundSrc: 'assets/img/result.png',
        clearZoneRadius: 40,
        nPoints: 2,
        pointSize: 1
    },
    {
        cardId: 4,
        cardName: 'Card 4',
        cardType: CARD_TYPE.Text,
        cardMessage: 'I wanna grow old with you!!',
        containerWidth: 350,
        containerHeight: 350,
        scratchType: SCRATCH_TYPE.CIRCLE,
        imageForwardSrc: 'assets/img/scratchcard.jpg',
        imageBackgroundSrc: 'assets/img/result.png',
        clearZoneRadius: 40,
        nPoints: 2,
        pointSize: 1
    },
    {
        cardId: 5,
        cardName: 'Card 5',
        cardType: CARD_TYPE.Text,
        cardMessage: 'Everyday is special with you!',
        containerWidth: 350,
        containerHeight: 350,
        scratchType: SCRATCH_TYPE.CIRCLE,
        imageForwardSrc: 'assets/img/scratchcard.jpg',
        imageBackgroundSrc: 'assets/img/result.png',
        clearZoneRadius: 40,
        nPoints: 2,
        pointSize: 1
    },
    {
        cardId: 2,
        cardName: 'Card 2',
        cardType: CARD_TYPE.Image,
        cardMessage: null,
        containerWidth: 350,
        containerHeight: 350,
        scratchType: SCRATCH_TYPE.CIRCLE,
        imageForwardSrc: 'assets/img/scratchcard.jpg',
        imageBackgroundSrc: 'assets/img/result.png',
        clearZoneRadius: 40,
        nPoints: 2,
        pointSize: 1
    },
    {
        cardId: 3,
        cardName: 'Card 3',
        cardType: CARD_TYPE.Image,
        cardMessage: null,
        containerWidth: 350,
        containerHeight: 350,
        scratchType: SCRATCH_TYPE.CIRCLE,
        imageForwardSrc: 'assets/img/scratchcard.jpg',
        imageBackgroundSrc: 'assets/img/result.png',
        clearZoneRadius: 40,
        nPoints: 2,
        pointSize: 1
    }
]
