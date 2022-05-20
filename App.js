import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import MenuScreen from './MenuScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Tienda" component={MenuScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Tasks" component={MenuScreen} options={{title: "Tienda"}} />
        <Stack.Screen name="Details" component={DetailScreen} options={{title: "Tienda"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
