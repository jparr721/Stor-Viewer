import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { AngularFireModule } from 'angularfire2';
import { BarcodeScanner } from 'ionic-native';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from "../pages/tabs-page/tabs-page";
import { AccountPage } from "../pages/account-page/account-page";
import { AddItemPage } from "../pages/add-item-page/add-item-page";
import { ListsPage } from "../pages/lists-page/lists-page";
import { RecipePage } from "../pages/recipe-page/recipe-page";
import { FoodPage } from "../pages/food-page/food-page";
import { FoodAmountManager } from "../providers/food-amount-manager";
import { RecipeProvider } from "../providers/recipe-provider";
import {HttpModule} from "@angular/http";


const cloudSettings: CloudSettings = {
  'core': {
    'app_id' : '33b22365'
  }
};

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA_HwMuGA-b4v9Eb1zpuw1AWhsHq3HJwgo",
  authDomain: "badmeat-eb028.firebaseapp.com",
  databaseURL: "https://badmeat-eb028.firebaseio.com",
  projectId: "badmeat-eb028",
  storageBucket: "badmeat-eb028.appspot.com",
  messagingSenderId: "357633371839"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    AccountPage,
    AddItemPage,
    ListsPage,
    RecipePage,
    FoodPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(config),
    [HttpModule],

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    AccountPage,
    AddItemPage,
    ListsPage,
    RecipePage,
    FoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    FoodAmountManager,
    RecipeProvider,
  ]
})
export class AppModule {}
