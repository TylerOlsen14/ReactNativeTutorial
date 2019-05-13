// import React, {Component} from 'react';
// import {AppRegistry, Platform, StyleSheet, Text, View, } from 'react-native';
// import {Navigator} from 'react-native-deprecated-custom-components';
import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';

export default class myapp extends Component{
  renderScene(route, navigator){
    switch(route.id){
      case 'component5':
        return (<Component5 navigator={navigator} title="component5" />)
      case 'component6':
        return (<Component6 user={route.user} navigator={navigator} title="component6" />)
    }
  }

  render(){
    return(
      <Navigator 
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);  
  renderScene(route, navigator) {
    switch(route.id){
      case 'Component5': 
        return(<Component5 navigator={navigator} title="Component5" />)
      case 'Component6': 
        return(<Component6 navigator={navigator} title="Component6" />)
    }
  }
  render() {
    return (
        <Navigator 
          initialRoute={{id: 'Component5'}}
          renderScene= {this.renderScene}
          configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        />
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);