import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account-page',
  templateUrl: 'account-page.html',
})
export class AccountPage {
  isLocationOn: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  areYouSure() {
    if(this.isLocationOn == false){
      let promptCheck = this.alert.create({
        title: 'Are you sure?',
        message: 'This saves battery, but restricts some features!',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log("Location is on");
              this.isLocationOn = true;
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.isLocationOn = false;
            }
          }
        ]
      });
      promptCheck.present();
    } else {
      console.log("Location is not turned on!");
    }
  }

  changePasswordConfirm() {
    let passwordConfirm = this.alert.create({
      title: 'Change password?',
      message: 'A link will be sent to your email',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log("No password reset");
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.changePassword();
          }
        }
      ]
    });
    passwordConfirm.present();
  }

  changePassword(){
    //TODO - Connect to databse and send an email
  }

}
