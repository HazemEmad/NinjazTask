import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import Posts from '../screens/Posts';
import Tab2 from '../screens/Tab2';
import Tab3 from '../screens/Tab3';
import {fs} from '../utils/Layouts';
import RealmPlugin from 'realm-flipper-plugin-device';
import {useRealm} from '@realm/react';

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  const realm = useRealm();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: {display: 'none'},
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {fontSize: fs(15)},
        }}>
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="Tab2" component={Tab2} />
        <Tab.Screen name="Tab3" component={Tab3} />
      </Tab.Navigator>
      {/***Flipper plugin */}
      <RealmPlugin realms={[realm]} />
    </NavigationContainer>
  );
};

export default AppNavigation;
