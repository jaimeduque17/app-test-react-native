import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
    <View style={styles.container}>
        <Image style={{width:100, height:100}}
            source={require('../images/logo.png')}/>
        <Text style={styles.logoText}>Bienvenido a</Text>
        <Text style={styles.logoText}>la Tienda de Mono</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'  
    },
    logoText: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
    }
  });

