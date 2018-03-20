export class Card {
    cardId: number;
    cardName: string;
    containerWidth: number;
    containerHeight: number;
    scratchType: SCRATCH_TYPE;
    imageForwardSrc: string;
    imageBackgroundSrc: string;
    clearZoneRadius: number;
    nPoints: number;
    pointSize: number;
}

export enum SCRATCH_TYPE {
    BRUSH,
    SPRAY,
    CIRCLE
}
//0: BRUSH,1:SPRAY,2: CIRCLE (taken from scratchable library source code)