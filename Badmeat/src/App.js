import React, { Component } from 'react';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCzD9-ddOvwU9CLER8AA49GC12k9ozl0tQ',
      authDomain: 'badmeat-ab23e.firebaseapp.com',
      databaseURL: 'https://badmeat-ab23e.firebaseio.com',
      projectId: 'badmeat-ab23e',
      storageBucket: 'badmeat-ab23e.appspot.com',
      messagingSenderId: '993104494639',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
        <Router />
    );
  }
}

export default App;
