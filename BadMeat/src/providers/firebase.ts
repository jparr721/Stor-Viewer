import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the Firebase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Firebase {
  public databse: any;

  constructor(public http: Http) {
    console.log('Hello Firebase Provider');
  }

  init(){
    const firebaseConfig = {
      apiKey: "AIzaSyA_HwMuGA-b4v9Eb1zpuw1AWhsHq3HJwgo",
      authDomain: "badmeat-eb028.firebaseapp.com",
      databaseURL: "https://badmeat-eb028.firebaseio.com",
      projectId: "badmeat-eb028",
      storageBucket: "badmeat-eb028.appspot.com",
      messagingSenderId: "357633371839"
    }

    firebase.initializeApp(firebaseConfig);

    this.databse = firebase.database().ref('/');


  }

  login(email, password){
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then((user: firebase.User) => {
        resolve(user);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  register(email, password){
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((user: firebase.User) => {
        resolve(user);
      }).catch((error) => {
        reject(error);
      });
    });
  }

}
