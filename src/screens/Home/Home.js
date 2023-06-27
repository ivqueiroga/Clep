import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/img/ABCDice.png';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

const { width, height } = Dimensions.get('window');

const filterW = width > height ? height : width;
const filterH = width > height ? width: height;

export default function Home() {
  const navigation = useNavigation();
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const gameTime = useSelector(state => state.persistedReducer.counter);

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
          size={filterW/13}
          value={'Jogar Partida'}
          color={colors[0]}
          shadowColor={colors[1]}
          name={'dice'}
          onClick={() => navigation.navigate('game')}
        />
        <Button
          isHorizontal={true}
          label={true}
          size={filterW/13}
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
    top: -(filterH/3),
    resizeMode: 'contain',
    width: filterW*1.1,
    height: filterH*1.1,
  },
  title: {
    paddingTop: filterH/2,
    fontFamily: 'Orbitron-Bold',
    fontSize: filterW/5,
    textShadowRadius: 1,
    textShadowOffset: {height: filterH/234, width: -filterH/234}
  },
  actionContainer: {
    marginVertical: '2%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: filterH/47,
  },
  content: {
    fontFamily: 'Orbitron-Bold',
    fontSize: filterW/18,
    textShadowRadius: 1,
    textShadowOffset: {height: filterH/700, width: -filterH/700}
  }
});