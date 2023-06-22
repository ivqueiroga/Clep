import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react';
import {data} from '../../utils/data';
const { colors } = data;
import { useSelector, useDispatch } from 'react-redux';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

import Button from '../../components/Button';

export default function index() {
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const [playThemes, setPlayThemes] = useState([]);
  const [randomTheme, setRandomTheme] = useState('Clique em Jogar para Iniciar');
  const [timer, setTimer] = useState(50);

  const themes = () => {
    if(gameThemes.isDefaultOn) {
      setPlayThemes(gameThemes.defaultThemes);
    } else {
      setPlayThemes(gameThemes.setThemes);
    };
  };

  useEffect(() => {
    themes();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        JOGO
      </Text>
      <View style={styles.gameZoneContainer}>
        <View style={styles.themeContainer}>
          <Button
            label={true}
            size={30}
            actionType={'playGame'}
            action={'play'}
            color={colors[1]}
            shadowColor={colors[4]}
            name={'play'}
            value={'Jogar'}
          />
          <Text style={styles.content}>
            {randomTheme}
          </Text>
          <Button
            label={true}
            size={30}
            actionType={'playGame'}
            action={'próximo'}
            color={colors[1]}
            shadowColor={colors[4]}
            name={'step-forward'}
            value={'Próximo'}
          />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.title}>
            {timer}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    paddingTop: '2%',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors[1],
  },
  gameZoneContainer: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 30,
    color: colors[3],
    textShadowColor: colors[4],
    textShadowRadius: 10,
    textShadowOffset: {height: 1, width: -1}
  },
  themeContainer: {
    fontFamily: 'Orbitron-Bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100,
    fontSize: 18,
    backgroundColor: colors[2],
    borderRadius: 15,
  },
  content: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 20,
    color: colors[1],
    // borderWidth: 1,
    textShadowColor: colors[4],
    textShadowRadius: 10,
    textShadowOffset: {height: 1, width: -1}
  },
  timeContainer: {
    marginTop: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});