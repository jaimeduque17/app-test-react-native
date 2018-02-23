import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput
} from 'react-native';

import Logo from '../components/Logo';

import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      usuario : 'admin@almundo.com',
      password : '12345',
      user : '',
      pass : ''
    }
    this.loggin = this.loggin.bind(this)
  }

  loggin() {
    
    if ((this.state.user === this.state.usuario) && (this.state.pass === this.state.password)) {
      Actions.products('products')
    }
    else {
      Alert.alert('Por favor, rectifique los datos ingresados.')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.containerForm}>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="User"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText ={(user) => this.setState({user})}
            value ={this.state.user}
          />
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            ref={(input) => this.password = input}
            onChangeText ={(pass) => this.setState({pass})}
            value ={this.state.pass}
          />
        </View>
        <View style={styles.textCont}>
          <TouchableOpacity
            onPress={this.loggin}
            style={styles.button}
          ><Text style={styles.text}> INGRESAR </Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#58ACFA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    width: 200,
    backgroundColor: '#FF0000',
    borderRadius: 25,
    paddingVertical: 16,
    marginVertical: 10
  },
  containerForm : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  }
});