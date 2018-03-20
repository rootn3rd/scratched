import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'scratch-card',
    templateUrl: 'scratch-card.component.html',
    styleUrls: ['/src/components/scratch-card/scratch-card.component.scss']
})

export class ScratchCardComponent implements OnInit {

    @ViewChild("scratch_container") scratchContainer: ElementRef;

    @Input('scratch-type')
    scratchType: any;

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

        const scContainer = this.scratchContainer.nativeElement;
        const scOptions = {
            scratchType: this.scratchType || SCRATCH_TYPE.CIRCLE,
            containerWidth: scContainer.offsetWidth,
            containerHeight: 300,
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