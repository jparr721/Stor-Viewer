import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FoodAmountManager } from "../../providers/food-amount-manager";
import { Database } from '../../providers/database';

/**
 * Generated class for the FoodPage page.
 * Most of the leg work is done in the provider.
 */
@IonicPage()
@Component({
  selector: 'page-food-page',
  templateUrl: 'food-page.html',
  providers: [Database, FoodAmountManager]
})
export class FoodPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    public foodAmt: FoodAmountManager, public db: Database) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

  displayFood(foodKey: string){
    return this.foodAmt.displayListItems(foodKey);
  }

  addToList() {
    this.foodAmt.addItem();
  }

  editItem(item) {
    this.foodAmt.editItem(item);
  }
<<<<<<< HEAD
=======

  deleteItem(item){
    this.foodAmt.deleteFood(item);
  }

>>>>>>> origin/master
}
