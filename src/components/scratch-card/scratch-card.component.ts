import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';

@Component({
    selector: 'scratch-card',
    templateUrl: 'scratch-card.component.html',
    styleUrls: ['/src/components/scratch-card/scratch-card.component.scss']
})

export class ScratchCardComponent implements OnInit, OnDestroy {

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

    private uniqueId: number;
    private scratchCardInstance = null;
    constructor() { }

    ngOnInit() {
        this.initializeCanvas();
    }

    ngOnDestroy() {
        if (this.scratchCardInstance) {
            this.scratchCardInstance.canvas.removeEventListener('scratch.move');
        }
    }

    initializeCanvas() {

        const scOptions = {
            scratchType: this.scratchType || SCRATCH_TYPE.CIRCLE,
            containerWidth: this.canvasWidth || 300,
            containerHeight: this.canvasHeight || 300,
            imageForwardSrc: this.coverImage || 'assets/img/scratchcard.jpg',
            imageBackgroundSrc: this.secretImage || 'assets/img/result.png',
            clearZoneRadius: this.clearZoneRadius || 40,
            nPoints: 2,
            pointSize: 1,
            callback: () => this.scratchCompleted.emit()
        };

        this.scratchCardInstance = new ScratchCard('.scratch_container', scOptions);
        this.scratchCardInstance.init().then(() => {

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