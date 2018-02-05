/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet,  Text, TextInput, View, Button, Alert} from 'react-native';
import * as firebase from 'firebase';


firebase.initializeApp({
    apiKey: "AIzaSyDejMzYeY1MEqRpnyI-GfISPiXbgbqxgHg",
    authDomain: "sendemail-66155.firebaseapp.com",
    databaseURL: "https://sendemail-66155.firebaseio.com",
    projectId: "sendemail-66155",
    storageBucket: "",
    messagingSenderId: "514169112176"
});


const firebaseRef = firebase.database().ref();

export default class Paul extends Component {

  constructor(props) {
      super(props);
      this.state = {
        nombre:'',telefono:'',email:''
      };
      this._onPressButton = this._onPressButton.bind(this);
    }

  _onPressButton() {
    var nombre = this.state.nombre;
    var telefono = this.state.telefono;
    var email = this.state.email;
    var refChange = firebaseRef.child('/nodo');
    refChange.set({dataForm:{
      nombre:nombre,
      telefono:telefono,
      email:email
    }});
  }
  render(){
    return(
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Ingrese su nombre"
            onChangeText={(nombre) => this.setState({nombre})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Teléfono"
            onChangeText={(telefono) => this.setState({telefono})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
          />
          <Button
            onPress={this._onPressButton}
            title="SEND!"
            color="#841584"
          />
        </View>
      );
  }
}

AppRegistry.registerComponent('Ronald', () => Paul );
