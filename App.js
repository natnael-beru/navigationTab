import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1,backgroundColor: 'blue' ,justifyContent: 'center', alignItems: 'center' }}>
      <Text><h1>Home Pages</h1></Text>
    </View>
  );
}
function ContactScreen() {
  return (
    <View style={{ backgroundColor: 'brown',flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text><h1>Contact Pages</h1></Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ backgroundColor: 'pink',flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text><h1>Settings pages</h1></Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="<Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
