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
  foodItem:Irecipe[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fp: FoodPage, private recipe: RecipeProvider) {

    this.recipe.testQuery().subscribe(foodItem => {
      this.foodItem = foodItem;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
  }

  loadBadMeat() {
    this.Badmeat = "chicken";
    if (this.fp.isFoodExpiring){
      this.recipe.getRecipes(this.Badmeat).subscribe(foodItem => {
        this.foodItem = foodItem;
      });
    }
  }




}

interface Irecipe {
  id: number;
  title: string;
  body: string;
}
