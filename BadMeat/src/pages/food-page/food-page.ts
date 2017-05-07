import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipeProvider } from "../../providers/recipe-provider";
/**
 * Generated class for the FoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-food-page',
  templateUrl: 'food-page.html',
  providers: [RecipeProvider]

})
export class FoodPage {
  isFoodExpiring: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private recipeProvider: RecipeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }


}


