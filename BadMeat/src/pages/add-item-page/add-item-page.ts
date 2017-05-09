import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(private navCtrl: NavController, private navParams: NavParams) {

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
}
