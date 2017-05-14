import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FoodPage } from "../pages/food-page/food-page"


/*
  Generated class for the FoodAmountManager provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FoodAmountManager {

  loadFood:FoodPage;

  constructor(public http: Http) {
    console.log('Hello FoodAmountManager Provider');


  }

  totalFoodAmount() {
    return this.loadFood.totalFoodAmount();
  }


}
