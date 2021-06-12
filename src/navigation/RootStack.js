import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppHomePage from '../screens/AppHomePage';
import {NavigationContainer} from '@react-navigation/native';
import RNUrlPreviewTGP from '../screens/RNUrlPreviewTGP';
import ReplaceThis from '../screens/DummyLibTestPage';
import Iconly from '../screens/Iconly';

const HomeStack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="AppHomePage" component={AppHomePage} />
        <HomeStack.Screen name="RNUrlPreviewTGP" component={RNUrlPreviewTGP} />
        <HomeStack.Screen name="DummyLibTestPage" component={ReplaceThis} />
        <HomeStack.Screen name="Iconly" component={Iconly} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
