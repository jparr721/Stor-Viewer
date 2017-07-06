import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodPage } from '../../pages/food-page/food-page';
import {RecipeProvider} from "../../providers/recipe-provider";
import {Http} from "@angular/http";

/**
 * Generated class for the RecipePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recipe-page',
  templateUrl: 'recipe-page.html',
  providers: [RecipeProvider, Http]
})
export class RecipePage {
  Badmeat: any; //Specifies which food you want, hopefully


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fp: FoodPage, private recipe: RecipeProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
  }
}
