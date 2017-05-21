import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FoodAmountManager } from "../../providers/food-amount-manager";
import { Database } from '../../providers/database';

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
  providers: [Database, FoodAmountManager]
})
export class FoodPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    public foodAmt: FoodAmountManager, public db: Database) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

  /**
  * This method will hopefully call the service
  * and add the foods to the list.
  **/
  addToList() {
    this.foodAmt.addItem();
  }

  editItem(item) {
    this.foodAmt.editItem(item);
  }

  deleteItem(item){
    this.foodAmt.deleteFood(item);
  }

}
