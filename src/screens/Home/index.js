import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/img/ABCDice.png';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

export default function index({navigation}) {
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const gameTime = useSelector(state => state.persistedReducer.counter);

  useEffect(() => {
    lockOrientation(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    return () => lockOrientation(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  const lockOrientation = async (orientation) => {
    await ScreenOrientation.lockAsync(orientation);
  };

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: colors[4]}}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo}/>
      </View>
      <Text style={{...styles.title, color: colors[1], textShadowColor: colors[0],}}>
        C L E P
      </Text>
      <View style={styles.actionContainer}>
        <Button
          isHorizontal={true}
          label={true}
          size={30}
          value={'Jogar'}
          color={colors[0]}
          shadowColor={colors[1]}
          name={'dice'}
          onClick={() => navigation.navigate('game')}
        />
        <Button
          isHorizontal={true}
          label={true}
          size={30}
          value={'Config'}
          color={colors[0]}
          shadowColor={colors[1]}
          name={'cogs'}
          onClick={() => navigation.navigate('settings')}
        />
      </View>
      <View>
        <Text style={{...styles.content, color: colors[1], textShadowColor: colors[0]}}>Tempo por Rodada: {gameTime.setTime}s</Text>
      </View>
      <View>
        <Text style={{...styles.content, color: colors[1], textShadowColor: colors[0]}}>Número de Temas: {gameThemes.setThemes.length}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    paddingHorizontal: '2%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  logo: {
    left: 0,
    top: 0,
    transform: [
      {translateY: -50},
      {translateX: -175},
    ],
    position: 'absolute',
    resizeMode: 'contain',
    width: 350,
    height: 350,
  },
  title: {
    paddingTop: '60%',
    fontFamily: 'Orbitron-Bold',
    fontSize: 80,
    textShadowRadius: 1,
    textShadowOffset: {height: 5, width: -5}
  },
  actionContainer: {
    marginVertical: '2%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  content: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    textShadowRadius: 1,
    textShadowOffset: {height: 1, width: -1}
  }
});