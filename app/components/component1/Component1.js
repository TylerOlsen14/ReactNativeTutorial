import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';


// type Props = {};
// export default class Component1 extends Component<Props> {
export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Felix',
      age: '6 months', 
      showName: true, 
      message: this.props.message
    }
  };

  static defaultProps = {
    message: 'Hi there ...'
  }

  render() {
      let name = this.state.showName ? this.state.name : 'No name';
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.message}</Text>
        <Text style={styles.welcome}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
AppRegistry.registerComponent('Component1', () => Component1);