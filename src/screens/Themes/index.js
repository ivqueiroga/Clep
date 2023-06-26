import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { modalToggle } from '../../redux/themesSlice';
import * as ScreenOrientation from 'expo-screen-orientation';

import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import Modal from '../../components/Modal';

export default function index({navigation}) {
  const dispatch = useDispatch();
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const isModalOn = useSelector(state => state.persistedReducer.themes.isModalOn);
  const DATA = gameThemes.setThemes;

  useEffect(() => {
    lockOrientation(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    return () => lockOrientation(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  const lockOrientation = async (orientation) => {
    await ScreenOrientation.lockAsync(orientation);
  };
  
  return (
    <SafeAreaView style={{...styles.container, backgroundColor: colors[4]}}>
      <Text style={{...styles.title, color: colors[1], textShadowColor: colors[0]}}>
        TEMAS
      </Text>
      <View style={styles.contentContainer}>
      <View style={{width:'80%',}}>
        <Modal />
      </View>
        <FlatList  
          data={DATA}
          renderItem={({item}) => <ListItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <Button
              isHorizontal={false}
              label={true}
              size={30}
              value={'Adicionar Tema'}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'plus'}
              onClick={() => dispatch(modalToggle(true))}
              
          />
      <View style={styles.navContainer}>
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
    paddingVertical: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 30,
    textShadowRadius: 1,
    textShadowOffset: {height: 5, width: -5}
  },
  contentContainer: {
    height: '70%',
    width: '100%',
  },
  navContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
});