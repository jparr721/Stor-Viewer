import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

import {NavController} from "ionic-angular";
import {AuthService} from "../../providers/auth-service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  username = '';
  email = '';

  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

    if (!this.isLoggedIn()){
      console.log('You are not logged in');
      this.nav.push(LoginPage).then(
        response => {
          console.log('Response ' + response);
        },
        error => {
          console.log('Error: ' + error);
        }
      ).catch(exception => {
        console.log('Exception ' + exception)
      });
    }
  }

  isLoggedIn() {
    if (window.localStorage.getItem('currentUser')){
      return true;
    }
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage').then(
        response => {
          console.log('Response ' + response);
        },
        error => {
          console.log('Error: ' + error);
        }
      ).catch(exception => {
        console.log('Exception ' + exception)
      });
    });
  }
}
