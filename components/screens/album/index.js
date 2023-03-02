// React Native Tab
// https://aboutreact.com/react-native-tab/
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import Feed from './feed';
import chat from './chat';
import InAlbumGallery from './InAlbumGallery';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack(itemId,title,navigation) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.darkgray,
        style: {
          backgroundColor: COLORS.white,
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: COLORS.primary,
          borderBottomWidth: 2,
        },
      }}>
          {navigation.setOptions({ title: title })}
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feeds',
          
        }} 
        initialParams={{ itemId: itemId }}
      />
      {/* <Tab.Screen
        name="Chat"
        component={chat}
        options={{
          tabBarLabel: 'Chat',
        }}
        initialParams={{ itemId: itemId }}
      /> */}
      <Tab.Screen
        name="Gallery"
        component={InAlbumGallery}
        options={{
          tabBarLabel: 'Gallery',
        }} 
        initialParams={{ itemId: itemId }}
      />
    </Tab.Navigator>
  );
}

const InAlbum = ({ route,navigation }) => {
    const { itemId,title } = route.params;
  return (
    
    TabStack(itemId,title,navigation)
  );
}

export default InAlbum;