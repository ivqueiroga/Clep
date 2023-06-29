import 'react-native-gesture-handler';
import { Dimensions, StatusBar } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from './src/hooks/useFonts';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux';
import * as ScreenOrientation from 'expo-screen-orientation';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';

import Home from "./src/screens/Home/Home";
import Game from "./src/screens/Game/Game";
import Settings from "./src/screens/Settings/Settings";
import Themes from "./src/screens/Themes/Themes";

const Stack = createStackNavigator();
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export function MyStack() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT); // Define a orientação como retrato (portrait)
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();

    return () => {
      ScreenOrientation.unlockAsync(); // Libera todas as orientações ao desmontar a tela
    };
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
          <Stack.Screen 
            component={Home}
            name="home"
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
            listeners={() => ({
              focus: () => {
                ScreenOrientation.lockAsync(
                  ScreenOrientation.OrientationLock.PORTRAIT
                );
              },
              blur: () => {
                ScreenOrientation.unlockAsync();
              },
            })}
          />
          <Stack.Screen
            component={Settings}
            name="settings"
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
            listeners={() => ({
              focus: () => {
                ScreenOrientation.lockAsync(
                  ScreenOrientation.OrientationLock.PORTRAIT
                );
              },
              blur: () => {
                ScreenOrientation.unlockAsync();
              },
            })}
          />
          <Stack.Screen
            component={Themes}
            name="themes"
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
            listeners={() => ({
              focus: () => {
                ScreenOrientation.lockAsync(
                  ScreenOrientation.OrientationLock.PORTRAIT
                );
              },
              blur: () => {
                ScreenOrientation.unlockAsync();
              },
            })}
          />
          <Stack.Screen
            component={Game}
            name="game"
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
            listeners={() => ({
              focus: () => {
                ScreenOrientation.lockAsync(
                  ScreenOrientation.OrientationLock.LANDSCAPE
                );
              },
              blur: () => {
                ScreenOrientation.unlockAsync();
              },
            })}
          />
        </Stack.Navigator>
        <StatusBar hidden={true} />
      </PersistGate>
    </Provider>
  );
};

export default function App() {
  return (
  <NavigationContainer theme={DefaultTheme}>
    <MyStack />
  </NavigationContainer>
  );
};
