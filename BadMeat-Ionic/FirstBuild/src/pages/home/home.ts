import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foodCount: number;

  constructor(public navCtrl: NavController) {

  }



  manageFoodCount(foodCount) {
   //Code to manage food added to item list
  }
}
