import { Component, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';
import { CARD_TYPE } from '../../models/card';


@Component({
    selector: 'scratch-card',
    templateUrl: 'scratch-card.component.html',
    styleUrls: ['/src/components/scratch-card/scratch-card.component.scss']
})

export class ScratchCardComponent implements AfterViewInit, OnDestroy {

    @Input('id')
    id: number;

    @Input('scratch-type')
    scratchType: any;

    @Input('canvas-height')
    canvasHeight: number;

    @Input('canvas-width')
    canvasWidth: number;

    @Input('secret-image')
    secretImage: string;

    @Input('cover-image')
    coverImage: string;

    @Input('clear-zone-radius')
    clearZoneRadius: number;

    @Input('n-points')
    nPoints: number;

    @Input('point-size')
    pointSize: number;

    @Output('scratch-completed')
    scratchCompleted: EventEmitter<any> = new EventEmitter();

    @Output('scratching')
    scratching: EventEmitter<any> = new EventEmitter();

    @Input('card-type')
    cardType: CARD_TYPE;

    @Input('card-message')
    cardMessage: string;

    private scratchCardInstance = null;

    constructor() { }

    ngAfterViewInit() {
        this.initializeCanvas();
    }

    ngOnDestroy() {
        if (this.scratchCardInstance) {
            this.scratchCardInstance.canvas.removeEventListener('scratch.move');
        }
    }

    getImageBackgroundSrc() {
        let image = 'assets/img/result.png';
        if (this.cardType && this.secretImage) {
            image = (this.cardType == CARD_TYPE.Image ? this.secretImage : 'assets/img/transparent.png')
        }
        return image;
    }

    initializeCanvas() {

        const scOptions = {
            scratchType: this.scratchType || SCRATCH_TYPE.CIRCLE,
            containerWidth: this.canvasWidth || 300,
            containerHeight: this.canvasHeight || 300,
            imageForwardSrc: this.coverImage || 'assets/img/scratchcard.jpg',
            imageBackgroundSrc: this.getImageBackgroundSrc(),
            clearZoneRadius: this.clearZoneRadius || 40,
            nPoints: 2,
            pointSize: 1,
            callback: () => this.scratchCompleted.emit()
        };

        const scratchContainerId = '#scratch_container_' + this.id;
        // let x = document.querySelector(scratchContainerId)
        // console.log('Found :', x);
        this.scratchCardInstance = new ScratchCard(scratchContainerId, scOptions);
        this.scratchCardInstance.init().then(() => {

            const img = document.querySelector(scratchContainerId + '>img');
            if (img) {
                console.log(img);
            }

            this.scratchCardInstance.canvas.addEventListener('scratch.move', () => {
                let percent = this.scratchCardInstance.getPercent().toFixed(2)
                this.scratching.emit({ percent: percent });
            })
        }).catch((error) => {
            // image not loaded
            console.error(error);
        });
    }
}