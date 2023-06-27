import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ScreenOrientation from 'expo-screen-orientation';
import { addTime, subTime, resetToCustomTime, timerControl } from '../../redux/counterSlice';
import { resetToDefault } from '../../redux/themesSlice';

import Button from '../../components/Button';

export default function index({navigation}) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const gameTime = useSelector(state => state.persistedReducer.counter);
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const dispatch = useDispatch();
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
      <Text style={{...styles.title, color: colors[1], textShadowColor: colors[0]}}>
        CONFIGURAÇÕES
      </Text>
      <View style={{...styles.timeContainer, color: colors[1], textShadowColor: colors[0]}}>
        <Text style={{...styles.contentTitle, color: colors[1], textShadowColor: colors[0]}}>Tempo por rodada</Text>
        <View style={styles.configContentContainer}>
          <Button
              isHorizontal={false}
              label={false}
              size={20}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'minus'}
              onClick={() => dispatch(subTime())}
          />
          <Text style={{...styles.input, backgroundColor: colors[0],  color: colors[1], textShadowColor: colors[4]}}>
            {gameTime.setTime}
          </Text>
          <Button
              isHorizontal={false}
              label={false}
              size={20}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'plus'}
              onClick={() => dispatch(addTime())}
          />
        </View>
        <Button
              isHorizontal={false}
              label={true}
              size={20}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'backward'}
              value={'Reset'}
              onClick={() => dispatch(resetToCustomTime())}
          />
      </View>
      <View style={{...styles.themeContainer, color: colors[1], textShadowColor: colors[0]}}>
        <Text style={{...styles.contentTitle, color: colors[1], textShadowColor: colors[0]}}>Temas</Text>
        <View style={styles.configContentContainer}>
          <Button
                label={true}
                size={20}
                color={colors[1]}
                shadowColor={colors[0]}
                name={'backward'}
                value={'Reset'}
                onClick={() => dispatch(resetToDefault())}
            />
          <Text style={{...styles.input, backgroundColor: colors[0],  color: colors[1], textShadowColor: colors[4]}}>
          {gameThemes.themeData.length}
          </Text>
          <Button
                isHorizontal={false}
                label={true}
                size={20}
                color={colors[1]}
                shadowColor={colors[0]}
                name={'wrench'}
                value={'Editar'}
                onClick={() => navigation.navigate('themes')}
            />
        </View>
      </View>
      <View style={styles.navContainer}>
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
          <Button
              isHorizontal={false}
              label={true}
              size={30}
              value={'Jogar'}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'dice'}
              onClick={() => navigation.navigate('game')}
          />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    paddingTop: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Orbitron-Bold',
    fontSize: 30,
    textShadowRadius: 1,
    textShadowOffset: {height: 3, width: -3}
  },
  content: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  timeContainer: {
    width: '100%',
    alignItems: 'center',
  },
  themeContainer: {
    width: '100%',
    alignItems: 'center',
  },
  contentTitle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    // color: colors[3],
    // textShadowColor: colors[6],
    textShadowRadius: 1,
    textShadowOffset: {height: 1, width: -1}
  },
  configContentContainer: {
    marginVertical: '5%',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  navContainer: {
    marginVertical: '5%',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  input: {
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    width: 80,
    height: 40,
    // backgroundColor: colors[3],
    fontFamily: 'Orbitron-Bold',
    // color: colors[1],
    // textShadowColor: colors[6],
    textShadowRadius: 1,
    textShadowOffset: {height: 1, width: -1}
  }
});