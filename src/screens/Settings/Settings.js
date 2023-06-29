import { Dimensions, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addTime, subTime, resetToCustomTime } from '../../redux/counterSlice';
import { resetToDefault, emptyThems } from '../../redux/themesSlice';

import Button from '../../components/Button';

const { width, height } = Dimensions.get('window');
const filterW = width > height ? height : width;
const filterH = width > height ? width: height;

export default function Settings() {
  const navigation = useNavigation();
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const gameTime = useSelector(state => state.persistedReducer.counter);
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const dispatch = useDispatch();

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
              size={filterH/24}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'plus'}
              onClick={() => dispatch(addTime())}
          />
        </View>
        <Button
              isHorizontal={false}
              label={true}
              size={filterH/24}
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
                size={filterH/24}
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
                size={filterH/24}
                color={colors[1]}
                shadowColor={colors[0]}
                name={'wrench'}
                value={'Editar'}
                onClick={() => navigation.navigate('themes')}
            />
        </View>
        <Button
              isHorizontal={false}
              label={true}
              size={filterH/24}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'circle'}
              value={'Zerar'}
              onClick={() => dispatch(emptyThems())}
          />
      </View>
      <View style={styles.navContainer}>
          <Button
              isHorizontal={false}
              label={true}
              size={filterW/13}
              value={'Home'}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'home'}
              onClick={() => navigation.navigate('home')}
              
          />
          <Button
              isHorizontal={false}
              label={true}
              size={filterW/13}
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
    fontSize: filterH/24,
    textShadowRadius: 1,
    textShadowOffset: {height: filterH/234, width: -filterH/234}
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
    fontSize: filterH/30,
    textShadowRadius: 1,
    textShadowOffset: {height: filterH/234, width: -filterH/234}
  },
  configContentContainer: {
    marginVertical: '5%',
    flexDirection: 'row',
    width: '80%',
    height: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    borderRadius: filterH/140,
    width: filterH/8.75,
    height: filterH/17.5,
    fontSize: filterH/30,
    fontFamily: 'Orbitron-Bold',
    textShadowRadius: 1,
    textShadowOffset: {height: filterH/500, width: -filterH/500},
    elevation: 15,
  }
});