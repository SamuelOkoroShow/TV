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
import Icon from 'react-native-vector-icons/Ionicons';

export default class Nav extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Icon name ="ios-menu" color="#333" size={22} />
      <Text style={{fontSize:14, fontWeight:'400'}}>{this.props.name.toUpperCase()}</Text>
      <Icon name ="ios-person-outline" color="#333" size={22} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:70,
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    paddingTop:25,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',

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
