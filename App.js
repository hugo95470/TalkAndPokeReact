// App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './Pages/MainPage';
import DetailsOeuvrePage from './Pages/DetailsOeuvrePage';
import NavBarre from './Components/NavBarre';
import SwipePage from './Pages/SwipePage';



const Stack = createStackNavigator();

export default class App extends React.Component {


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} ></Stack.Screen>
          <Stack.Screen name="DetailsOeuvrePage" component={DetailsOeuvrePage} options={{ headerShown: false }} />
          <Stack.Screen name="NavBarre" component={NavBarre} options={{ headerShown: false }} />
          <Stack.Screen name="SwipePage" component={SwipePage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}