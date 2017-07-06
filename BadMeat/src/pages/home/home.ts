import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AccountPage} from "../account-page/account-page";
import {RecipePage} from "../recipe-page/recipe-page";
import {FoodPage} from "../food-page/food-page";

import { FoodAmountManager} from "../../providers/food-amount-manager";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FoodAmountManager]
})
export class HomePage {

  constructor(public navCtrl: NavController, private foodTotal: FoodAmountManager) {
    //TODO - Delete this later, this is just for testing login.
    console.log(window.localStorage.getItem('currentUser'));
    window.localStorage.removeItem('currentUser');
    if (!this.isLoggedIn()){
      console.log('You are not logged in!');
      //this.navCtrl.push(LoginPage);
    }
  }

  isLoggedIn() {
    if (window.localStorage.getItem('currentUser')){

      return true;

    }
  }

  loadTotalFood(): number {
    return this.foodTotal.getTotalFood();
  }

  showAccountPage() {
    this.navCtrl.push(AccountPage);
  }

  //TODO - Turn this into the recipe page.
  goToRecipes() {
    this.navCtrl.push(RecipePage);
  }

  loadFoodPage(){
    this.navCtrl.push(FoodPage);
  }

}
