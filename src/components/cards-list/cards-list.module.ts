import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScratchCardModule } from '../scratch-card/scratch-card.module';
import { CardsListComponent } from './cards-list.component';

@NgModule({
    imports: [ScratchCardModule, CommonModule],
    exports: [CardsListComponent],
    declarations: [CardsListComponent],
    providers: [],
})
export class CardsListModule { }
