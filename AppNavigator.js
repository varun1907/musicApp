import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Details from './components/Details'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store'
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }

  export default MyStack