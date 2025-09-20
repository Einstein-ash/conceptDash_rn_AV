// src/navigators/RootNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { RootStackParamList } from './types';



import HomePage from '../screens/HomePage';
import AboutScreen from '../screens/About/AboutScreen';
import ExpertiseScreen from '../screens/Expertise/ExpertiseScreen';
import ProjectsScreen from '../screens/Projects/ProjectsScreen';
import StoriesScreen from '../screens/Stories/StoriesScreen';
import CareersScreen from '../screens/Careers/CareersScreen';
import ContactScreen from '../screens/Contact/ContactScreen';

import {
  ConstructionProjectManagementScreen,
  ConstructionAdminScreen,
  ConstructionGeotechnicalScreen,
  ArchUrbanPlanningScreen,
  ArchRenderingScreen,
  ArchIlluminationScreen,
  ArchBIMScreen,
  RailwaysSignallingScreen,
  RailwaysStudiesScreen,
  RailwaysVRScreen,
  RailwaysBIMScreen,
  EngineeringWaterScreen,
  EngineeringTrafficScreen,
  EngineeringLandScreen,
  EngineeringStructuralScreen,
  EngineeringAcousticsScreen,
} from '../screens/Expertise'; 

const Stack = createStackNavigator<RootStackParamList>();

type RootNavigatorProps = {
  onScroll: any; 
   onMenuPress: () => void;
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


      <Stack.Screen name="Construction_PM" component={ConstructionProjectManagementScreen} />
      <Stack.Screen name="Construction_Admin" component={ConstructionAdminScreen} />
      <Stack.Screen name="Construction_Geotechnical" component={ConstructionGeotechnicalScreen} />
      <Stack.Screen name="Arch_Urban" component={ArchUrbanPlanningScreen} />
      <Stack.Screen name="Arch_Rendering" component={ArchRenderingScreen} />
      <Stack.Screen name="Arch_Illumination" component={ArchIlluminationScreen} />
      <Stack.Screen name="Arch_BIM" component={ArchBIMScreen} />
      <Stack.Screen name="Railways_Signalling" component={RailwaysSignallingScreen} />
      <Stack.Screen name="Railways_Studies" component={RailwaysStudiesScreen} />
      <Stack.Screen name="Railways_VR" component={RailwaysVRScreen} />
      <Stack.Screen name="Railways_BIM" component={RailwaysBIMScreen} />
      <Stack.Screen name="Engineering_Water" component={EngineeringWaterScreen} />
      <Stack.Screen name="Engineering_Traffic" component={EngineeringTrafficScreen} />
      <Stack.Screen name="Engineering_Land" component={EngineeringLandScreen} />
      <Stack.Screen name="Engineering_Structural" component={EngineeringStructuralScreen} />
      <Stack.Screen name="Engineering_Acoustics" component={EngineeringAcousticsScreen} />
      
    </Stack.Navigator>
  );
};

export default RootNavigator;