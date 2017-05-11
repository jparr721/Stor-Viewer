import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';


/**
 * Generated class for the ListsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  templateUrl: 'popover.html',
})
export class PopoverPage {
  listTitle: string;
  listItems: string[];
  description: string;
  foodName: string;
  quantity: number;
  isSaveClicked: boolean;

  constructor(private navParams: NavParams){

  }

  saveList() {

  }
}


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


  presentPopover(ev){
    let popover = this.popCtrl.create(PopoverPage, {

    })
  }
}
