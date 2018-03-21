import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScratchCardComponent } from './scratch-card.component';

@NgModule({
    imports: [CommonModule],
    exports: [CommonModule, ScratchCardComponent],
    declarations: [ScratchCardComponent],
    providers: [],
})
export class ScratchCardModule { }
