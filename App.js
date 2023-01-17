import React from 'react';
import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Plans from './screens/Plans';
import Register from './screens/Register';
import Login from './screens/Login';
import Colors from './constants/colors';
import { far, faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDollar } from '@fortawesome/free-solid-svg-icons';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AppOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: Colors.black2},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: Colors.black2},
        tabBarActiveTintColor: Colors.success,
        tabBarInactiveTintColor: Colors.black7
      })}
    >
      <BottomTabs.Screen 
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faStar} color={color} size={20} />
        }}
      />
      <BottomTabs.Screen 
        name='Plans'
        component={Plans}
        options={{
          tabBarLabel: 'Plans',
          tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faDollar} color={color} size={20} />
        }}
      />
    </BottomTabs.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.black2}
          }}
        >
          <Stack.Screen name='DregoSports' component={AppOverview} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
});

library.add(far, faStar);
library.add(far, faDollar);
export default App;
