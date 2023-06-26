import 'react-native-gesture-handler';
import {  StatusBar } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from './src/hooks/useFonts';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import * as ScreenOrientation from 'expo-screen-orientation';

import Home from "./src/screens/Home";
import Game from "./src/screens/Game";
import Settings from "./src/screens/Settings";
import Themes from "./src/screens/Themes";

const Stack = createStackNavigator();
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export function MyStack() {
  const [appIsReady, setAppIsReady] = useState(false);  

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store} onLayout={onLayoutRootView()}>
      <PersistGate loading={null} persistor={persistor} >
        <Stack.Navigator >
          <Stack.Screen name="home" options={{headerShown: false}}>
            {props => <Home {...props} />}
          </Stack.Screen>
          <Stack.Screen name="settings" options={{headerShown: false}}>
            {props => <Settings {...props} />}
          </Stack.Screen>
          <Stack.Screen name="themes" options={{headerShown: false}}>
            {props => <Themes {...props} />}
          </Stack.Screen>
          <Stack.Screen name="game" options={{headerShown: false}}>
            {props => <Game {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
        <StatusBar hidden={true} />
      </PersistGate>
    </Provider>
  );
};

export default function App() {
  return (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
};
