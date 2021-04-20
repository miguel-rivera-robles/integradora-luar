import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/home/home';
import bebidasCalientes from './src/screens/productos/bebidasCalientes';
import bebidasFrias from './src/screens/productos/bebidasFrias';
import postres from './src/screens/productos/postres';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Bebidas Frias" component={bebidasFrias} />
      <Drawer.Screen name="Bebidas Calientes" component={ bebidasCalientes} />
      <Drawer.Screen name="Postres" component={postres} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}