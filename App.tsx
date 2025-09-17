import React, { useState, useRef } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Animated,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigators/navigationUtils.js';

import SideNavBar from './src/components/SideNavBar';
import Header, { HEADER_HEIGHT } from './src/components/Header';
import RootNavigator from './src/navigators/RootNavigator';

function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;


  const clampedScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

  const headerTranslateY = clampedScrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT], 
    extrapolate: 'clamp',
  });

    const onScrollHandler = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#111" />

      <View style={styles.container}>
        <NavigationContainer ref={navigationRef}>
          {/* We pass the onScroll handler into the navigator using screenProps */}
          {/* This is a temporary way to keep the animation working */}
           <RootNavigator onScroll={onScrollHandler} />
        </NavigationContainer>
        
        <Animated.View
          style={[
            styles.headerContainer,
            { transform: [{ translateY: headerTranslateY }] },
          ]}
        >
          <Header onMenuPress={() => setIsSidebarVisible(true)} />
        </Animated.View>

        <SideNavBar
          isVisible={isSidebarVisible}
          onClose={() => setIsSidebarVisible(false)}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
});

export default App;