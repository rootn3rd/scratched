import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsPage } from './cards';
import { ComponentsModule } from '../../components/components.module';

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
