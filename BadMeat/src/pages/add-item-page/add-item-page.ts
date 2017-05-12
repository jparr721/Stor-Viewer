import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {ScanCodePage} from "../scan-code-page/scan-code-page";

/**
 * Generated class for the AddItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html',
})
export class AddItemPage {
  listTitle: string;
  listItems: string[];
  foodName: string;
  quantity: number;
  isSaveClicked: boolean;


  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');

  }


  /**
   * Load the scanner to get the barcodes
   */
  loadScanner() {
    this.navCtrl.push(ScanCodePage)
  }

  addFood(){

  }

  addList(){
    let prompt = this.alertCtrl.create({
      title: 'Add New List',
      message: "Please enter the title of your list",
      inputs: [
        {
          name: 'listTitle',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked');
          }
        },
        {
          text: 'Save List',
          handler: data => {
            console.log('Save initiated');
            this.listItems.push(data);
            this.isSaveClicked = true;
          }
        }
      ]
    });
    prompt.present();

  }

  addToList(item){

    let prompt = this.alertCtrl.create({
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
          handler: data => {
            let index = this.listItems.indexOf(item);

            if (index > -1){
              this.listItems[index] = data;
            } else {
              throw new Error("Error, index out of bounds");
            }
          }
        }
      ]
    })
  }

  saveClicked() {
    if (this.isSaveClicked){

    }
  }
}
