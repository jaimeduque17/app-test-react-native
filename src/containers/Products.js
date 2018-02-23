import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Products extends Component {

  goBack() {
    Actions.pop();
  }

  info() {
    Actions.info();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textCont}>
          <ScrollView>
            <TouchableHighlight onPress={this.info}><Image style={styles.image}
              source={require('../images/shoes1.png')} /></TouchableHighlight>
            <Text style={styles.shoesText}>Adidas Stan Smith</Text>
            <Text style={styles.prize}>$150.000</Text>

            <TouchableHighlight onPress={this.info}><Image style={styles.image}
              source={require('../images/shoes2.png')} /></TouchableHighlight>
            <Text style={styles.shoesText}>Adidas NMD Negras</Text>
            <Text style={styles.prize}>$180.000</Text>

            <TouchableHighlight onPress={this.info}><Image style={styles.image}
              source={require('../images/shoes3.png')} /></TouchableHighlight>
            <Text style={styles.shoesText}>Nike Presto Grises</Text>
            <Text style={styles.prize}>$130.000</Text>

            <TouchableHighlight onPress={this.info}><Image style={styles.image}
              source={require('../images/shoes4.png')} /></TouchableHighlight>
            <Text style={styles.shoesText}>Nike Presto Negras</Text>
            <Text style={styles.prize}>$135.000</Text>

            <TouchableHighlight onPress={this.info}><Image style={styles.image}
              source={require('../images/shoes5.png')} /></TouchableHighlight>
            <Text style={styles.shoesText}>Reebok Classics Grises</Text>
            <Text style={styles.prize}>$145.000</Text>

            <TouchableHighlight onPress={this.info}><Image style={styles.image}
              source={require('../images/shoes6.png')} /></TouchableHighlight>
            <Text style={styles.shoesText}>Reebok GL 6000</Text>
            <Text style={styles.prize}>$170.000</Text>

            <TouchableHighlight onPress={this.info}><Image style={styles.image}
              source={require('../images/shoes7.png')} /></TouchableHighlight>
            <Text style={styles.shoesText}>Reebok Classics Blancas</Text>
            <Text style={styles.prize}>$175.000</Text>

            <TouchableHighlight onPress={this.info}><Image style={styles.image}
              source={require('../images/shoes8.png')} /></TouchableHighlight>
            <Text style={styles.shoesText}>Adidas Super Star</Text>
            <Text style={styles.prize}>$150.000</Text>

          </ScrollView>
          <TouchableOpacity
            onPress={this.goBack}
            style={styles.button}
          ><Text style={styles.btnText}> VOLVER </Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#58ACFA',
    alignItems: 'center'
  },
  textCont: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250
  },
  shoesText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 18,
    bottom: 5,
    textAlign: 'center',
  },
  prize: {
    fontWeight: 'bold',
    color: '#FF0000',
    fontSize: 25,
    bottom: 12,
    textAlign: 'center',
  },
  button: {
    width: 200,
    backgroundColor: '#FF0000',
    borderRadius: 25,
    paddingVertical: 16,
    marginVertical: 10
  }
});