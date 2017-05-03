import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AccountPage} from "../account-page/account-page";
import {RecipePage} from "../recipe-page/recipe-page";
import {FoodPage} from "../food-page/food-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    //TODO - Delete this later, this is just for testing login.
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
