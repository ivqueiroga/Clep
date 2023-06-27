import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/img/ABCDice.png';
import * as ScreenOrientation from 'expo-screen-orientation';

import Button from '../../components/Button';

const { width, height } = Dimensions.get('window');

export default function index({navigation}) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const gameTime = useSelector(state => state.persistedReducer.counter);
  const [orientation, setOrientation] = useState(1);

  const PORTRAIT = ScreenOrientation.OrientationLock.PORTRAIT_UP;

  const lockOrientation = async (orientation) => {
    await ScreenOrientation.lockAsync(orientation);
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  useEffect(() => {
    lockOrientation(PORTRAIT);
    return () => lockOrientation(PORTRAIT)
  }, []);

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
          value={'Jogar Partida'}
          color={colors[0]}
          shadowColor={colors[1]}
          name={'dice'}
          onClick={() => navigation.navigate('game')}
        />
        <Button
          isHorizontal={true}
          label={true}
          size={30}
          value={'Configurações'}
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
        <Text style={{...styles.content, color: colors[1], textShadowColor: colors[0]}}>Número de Temas: {gameThemes.themeData.length}</Text>
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
  logoContainer: {
    position: 'absolute',
  },
  logo: {
    // left: 0,
    // top: 0,
    // transform: [
    //   {translateY: -250},
    //   {translateX: -200},
    // ],
    // position: 'absolute',
    top: -250,
    resizeMode: 'contain',
    width: width*1.1,
    height: height*1.1,
  },
  title: {
    paddingTop: '90%',
    fontFamily: 'Orbitron-Bold',
    fontSize: 80,
    textShadowRadius: 1,
    textShadowOffset: {height: 3, width: -3}
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