import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {ScanCodePage} from "../scan-code-page/scan-code-page";

/**
 * Add shopping lists to setup custom meals based on the items in the list
 */
@IonicPage()
@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html',
})
export class AddItemPage {



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


  }


  saveClicked() {

  }
}
