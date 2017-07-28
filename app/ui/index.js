/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Nav from './widgets/nav'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Nav name="Characters" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TV', () => TV);
