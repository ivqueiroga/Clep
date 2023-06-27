import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useEffect, useState, useRef} from 'react';
import { timerControl } from '../../redux/counterSlice';
import { setRandomTheme, useThemeData, engageGame } from '../../redux/themesSlice';
import { useSelector, useDispatch } from 'react-redux';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Audio } from 'expo-av';
const HAT_SOUND = '../../assets/audio/Tick.wav';
const BELL_SOUND = '../../assets/audio/Bell.wav';
let timer = () => {};

import Button from '../../components/Button';

export default function index({navigation}) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  const dispatch = useDispatch();
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const gameTime = useSelector(state => state.persistedReducer.counter);
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const [sound, setSound] = useState();
  const defaultTime = gameTime.isCustomOn ? gameTime.setTime : gameTime.defaultTime;
  const [initTime, setInitTime] = useState(defaultTime);
  const [timeLeft, setTimeLeft] = useState(initTime);
  const [orientation, setOrientation] = useState(1);

  const PORTRAIT = ScreenOrientation.OrientationLock.PORTRAIT_UP;
  const LADSCAPE = ScreenOrientation.OrientationLock.LANDSCAPE;

  const lockOrientation = async (orientation) => {
    await ScreenOrientation.lockAsync(orientation);
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  useEffect(() => {
    lockOrientation(LADSCAPE);
    return () => lockOrientation(LADSCAPE)
  }, []);

  async function playSound(soundType) {
    if (soundType === 'hat') {
      const { sound } = await Audio.Sound.createAsync( require(HAT_SOUND)
      );
      setSound(sound);
      await sound.playAsync();
    }
    else {
      const { sound } = await Audio.Sound.createAsync( require(BELL_SOUND)
      );
      setSound(sound);
      await sound.playAsync();
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const startTimer = () => {
    timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1 && prev < 5) playSound('hat');
        if (prev === 1 ) playSound('bell');
        return prev -= 1;
      });
    }, 1000)
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const handleTimer = (e, restart) => {
    e.preventDefault();
    if (gameThemes.isGameEngaged && restart) {
      clearInterval(timer);
      setTimeLeft(() => defaultTime);
      dispatch(setRandomTheme());
      dispatch(engageGame(false));
      dispatch(useThemeData());
    } else {
      dispatch(engageGame(true));
      if (timer) {
        clearInterval(timer);
      }

      dispatch(setRandomTheme());

      setTimeLeft(() => defaultTime);
      startTimer();
      };
  };

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: colors[4]}}>
      <Text style={{...styles.title, color: colors[1], textShadowColor: colors[0]}}>
        JOGO
      </Text>
      <View style={styles.gameZoneContainer}>
        <View style={{...styles.themeContainer, backgroundColor: colors[0]}}>
          <Button
            isHorizontal={false}
            label={true}
            size={30}
            color={colors[1]}
            shadowColor={colors[4]}
            name={gameThemes.isGameEngaged ? 'backspace' : 'play'}
            value={gameThemes.isGameEngaged ? 'Reiniciar' : 'Jogar'}
            onClick={(e) => handleTimer(e, 'restart')}
          />
          <Text style={{...styles.content, color: colors[1], textShadowColor: colors[4]}}>
            {gameThemes.isGameEngaged ? gameThemes.randomTheme.theme : 'Clique em Jogar para Iniciar'}
          </Text>
          <Button
            isHorizontal={false}
            disabled={!gameThemes.isGameEngaged}
            label={true}
            size={30}
            color={!gameThemes.isGameEngaged ? colors[0] : colors[1]}
            shadowColor={colors[4]}
            name={'step-forward'}
            value={'Próximo'}
            onClick={(e) => handleTimer(e, null)}
          />
        </View>
        <View style={styles.timeContainer}>
          <Text style={{...styles.title, color: colors[1], textShadowColor: colors[0], fontSize: 60}}>
            {timeLeft} s
          </Text>
        </View>
        <View style={styles.configContentContainer}>
          <Button
            isHorizontal={false}
            label={true}
            size={30}
            value={'Home'}
            color={colors[1]}
            shadowColor={colors[0]}
            name={'home'}
            onClick={() => navigation.navigate('home')}
          />
          <Text style={{...styles.content, color: colors[1], textShadowColor: colors[0], paddingTop: '5%', fontSize: 14}}>Temas restantes: {gameThemes.setThemes.length}</Text>
          <Button
            isHorizontal={false}
            label={true}
            size={30}
            value={'Config'}
            color={colors[1]}
            shadowColor={colors[0]}
            name={'cogs'}
            onClick={() => navigation.navigate('settings')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    paddingTop: '2%',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  gameZoneContainer: {
    marginTop: '2%',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 30,
    textShadowRadius: 1,
    textShadowOffset: {height: 3, width: -3}
  },
  themeContainer: {
    fontFamily: 'Orbitron-Bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '2%',
    width: '100%',
    height: 100,
    fontSize: 18,
    borderRadius: 15,
    elevation: 30,
    shadowRadius: 10,
  },
  content: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 20,
    textShadowRadius: 1,
    textShadowOffset: {height: 1, width: -1}
  },
  timeContainer: {
    marginTop: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  configContentContainer: {
    margintop: '5%',
    height: '35%',
    // paddingBottom: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});