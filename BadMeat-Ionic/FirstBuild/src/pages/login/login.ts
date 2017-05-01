import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Loading, AlertController, LoadingController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";

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
  loading: Loading;
  registerCredentials = { email: '', password: ''};


  constructor(public navCtrl: NavController, private auth: AuthService, public navParams: NavParams,
  private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  public createAccount() {
    this.navCtrl.push('RegisterPage').then().catch(exception => {
      console.log('Exception ' + exception);
    }); //Promise ignored error
  }

  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          this.navCtrl.setRoot('LoginPage').then().catch(exception => {
            console.log('Exeption ' + exception);
          });//Promise ignored error
        } else {
          this.showError("Access Denied");
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present().then().catch(exception => {
      console.log('Exception ' + exception);
    }); //Promise ignored error
  }

  showError(text) {
    this.loading.dismiss().then().catch(exception => {
      console.log('Exception ' + exception);
    }); //Promise ignored error

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt).then().catch(exception => {
      console.log('Exception ' + exception);
    }); //Promise ignored error
  }

}
