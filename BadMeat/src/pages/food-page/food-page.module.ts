import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodPage } from './food-page';

@NgModule({
  declarations: [
    FoodPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodPage),
  ],
  exports: [
    FoodPage
  ]
})
export class FoodPageModule {}
