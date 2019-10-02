
import React, { Component } from 'react';
import {
  StyleSheet,
  View,

} from 'react-native';

import { Router, Stack, Scene } from 'react-native-router-flux';
import DataApp from './src/DataApp';
import Detail from './src/Detail';


export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Router>
          <Stack>
            <Scene
              key="DataApp"
              component={DataApp}
              title="DataApp"
              hideNavBar={true}
            />
            <Scene
              key="Detail"
              component={Detail}
              title="Detail"

            />

          </Stack>
        </Router>
      </View>
    );
  }
}
