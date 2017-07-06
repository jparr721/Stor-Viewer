import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  listTitle: string;
  listItems: any[] = [];
  groupedItems = [];
  foodName: string;
  quantity: number;
  isSaveClicked: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private recipeProvider: RecipeProvider, private alertCtrl: AlertController) {

    this.groupItems(this.listItems);

  }

  totalFoodAmount() {
    return this.listItems.length;
  }

  groupItems(items){

    let sortedItems = this.listItems.sort();
    let currentLetter = false;
    let currentItems = [];

    sortedItems.forEach((value, index) => {
      if(value.charAt(0) != currentLetter){

        currentLetter = value.charAt(0);

        let newGroup = {
          letter: currentLetter,
          listItems: []
        };

        currentItems = newGroup.listItems;
        this.groupedItems.push(newGroup);

      }

      currentItems.push(value);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

  addItem(){
    let addFood = this.alertCtrl.create({
      title: 'Add Food',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add Item',
          handler: (data) => {
            this.listItems.push(data);
          }
        }
      ]
    });
    addFood.present();
  }

  editItem(item){

    let editFood = this.alertCtrl.create({
      title: 'Add to list',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            let index = this.listItems.indexOf(item);

            if (index > -1){
              this.listItems[index] = data;
            } else {
              throw new Error("Error, index out of bounds");
            }
          }
        }
      ]
    });
    editFood.present();
  }

  deleteFood(item){
    let index = this.listItems.indexOf(item);

    if (index > -1){
      this.listItems.splice(index, 1);
    } else {
      throw new Error("Error, index out of bounds");
    }
  }
}
