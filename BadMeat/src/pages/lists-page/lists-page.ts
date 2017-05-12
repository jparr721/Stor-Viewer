import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import {AddItemPage} from "../add-item-page/add-item-page";



/**
 * Generated class for the ListsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists-page',
  templateUrl: 'lists-page.html',
})
export class ListsPage {

  constructor(public navCtrl: NavController, public popCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  addList() {
    this.navCtrl.push(AddItemPage);
  }


}
