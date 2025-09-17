// src/navigators/RootNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { RootStackParamList } from './types';


// Import all your screens
import HomePage from '../screens/HomePage.tsx';
import AboutScreen from '../screens/About/AboutScreen.tsx';
import ExpertiseScreen from '../screens/Expertise/ExpertiseScreen.tsx';
import ProjectsScreen from '../screens/Projects/ProjectsScreen.tsx';
import StoriesScreen from '../screens/Stories/StoriesScreen.tsx';
import CareersScreen from '../screens/Careers/CareersScreen.tsx';
import ContactScreen from '../screens/Contact/ContactScreen.tsx';

const Stack = createStackNavigator<RootStackParamList>();

type RootNavigatorProps = {
  onScroll: any; 
};

const RootNavigator: React.FC<RootNavigatorProps> = ({ onScroll }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"

      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="Home" component={HomePage} initialParams={{ onScroll: onScroll }} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Expertise" component={ExpertiseScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="Stories" component={StoriesScreen} />
      <Stack.Screen name="Careers" component={CareersScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;