import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module'
import { CardsPage } from './cards';

@NgModule({
  declarations: [
    CardsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CardsPage),
    TranslateModule.forChild()
  ],
  exports: [
    CardsPage
  ]
})
export class CardsPageModule { }
