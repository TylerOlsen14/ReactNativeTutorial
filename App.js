import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import Component4 from './app/components/component4/Component4'

// type Props = {};
// export default class MyApp extends Component<Props> {
export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      {/* //   <Text style={styles.welcome}>Welcome to the jungle!</Text>
      //   <Text style={styles.welcome}>There ain't no fun and games!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text> */}
        <Component4 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
  },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
AppRegistry.registerComponent('MyApp', () => MyApp);