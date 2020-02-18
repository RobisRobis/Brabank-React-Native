import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login'


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    minHeight: 100,
    backgroundColor: '#950'
  }
});
