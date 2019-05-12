import React, {Component} from 'react';
import {
    AppRegistry, 
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight, 
    TouchableOpacity
  } from 'react-native';
// import console = require('console');

export default class Component2 extends Component {
  onPress(){
    console.log('Area presssed');
  }

  onPress2(){
    console.log('Area 2 pressed')
  }

  render() {
    return (
      <View style={styles.myView}>
        <View style={styles.myText}>
          <Text>Hello, Tyler!</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight 
            style={styles.v1} 
            onPress={this.onPress}
            underlayColor="blue"
          >
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
            style={styles.v2}
            onPress={this.onPress2}
          >
            <View>
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>
            
            <View style={styles.v3}>
              <Text style={styles.vText}>View 3</Text>
            </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
  container: {
    flexDirection: 'row',
    height: 100,
    width: 100,
  },
  myText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'green'
  },
  v1: {
    flex:1,
    backgroundColor: 'red', 
    padding: 10
  },
  v2: {
    flex:1,
    backgroundColor: 'green', 
    padding: 10
  },
  v3: {
    flex:1,
    backgroundColor: 'blue', 
    padding: 10,
  },
  vText: {
    color: 'white'

  }
});
AppRegistry.registerComponent('Component2', () => Component2);