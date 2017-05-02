import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import { ToastController } from 'ionic-angular';
import {TabsPage} from "../tabs-page/tabs-page";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: any;
  password: any;
  loginSuccess: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire,
  public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  presentToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position,
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present(toast);
  }


  login() {
    this.angfire.auth.login({
      email: this.email,
      password: this.password
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((response) => {
        console.log('Login success ' + JSON.stringify(response));
        this.presentToast("Bottom", "Login Successful");
        this.loginSuccess = true;
        if (this.loginSuccess){
          let currentUser = {
            email: response.auth.email,
            picture: response.auth.photoURL
          };
          window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.navCtrl.insert(0,TabsPage);
          this.navCtrl.popToRoot();

          // this.navCtrl.push(TabsPage); this is broken rn for some reason
        }
    }).catch((error) => {
      console.log(error);
      this.presentToast("Bottom", "Login Failed, try again");
    })


  }


  twitterLogin() {
    this.angfire.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login Successful! ' + JSON.stringify(response));
      this.presentToast("Bottom", "Login Successful");
      this.loginSuccess = true;
      if (this.loginSuccess){
        let currentUser = {
          email: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.navCtrl.insert(0,TabsPage);
        this.navCtrl.popToRoot();

        // this.navCtrl.push(TabsPage); this is broken rn for some reason
      }
    }).catch((error) => {
      console.log(error);
      this.presentToast("Bottom", "Login Failed, try again");
    })
  }

  facebookLogin() {
    this.angfire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login Successful! ' + JSON.stringify(response));
      this.presentToast("Bottom", "Login Successful");
      this.loginSuccess = true;
      if (this.loginSuccess){
        let currentUser = {
          email: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.navCtrl.insert(0,TabsPage);
        this.navCtrl.popToRoot();

        // this.navCtrl.push(TabsPage); this is broken rn for some reason
      }
    }).catch((error) => {
      console.log(error);
      this.presentToast("Bottom", "Login Failed, try again");
    })
  }

}
