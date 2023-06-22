import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react';
import {data} from '../../utils/data';
const { colors } = data;
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../components/Button';

export default function index({navigation}) {
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const gameTime = useSelector(state => state.persistedReducer.counter);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        C L E P
      </Text>
      <View>
        <Text style={styles.content}>Tempo da Rodada: {gameTime.isCustomOn ? gameTime.setTime : gameTime.defaultTime}</Text>
      </View>
      <View>
        <Text style={styles.content}>Temas disponíveis: {gameThemes.isCustomOn ? gameThemes.setThemes.length : gameThemes.defaultThemes.length}</Text>
      </View>
      <View style={styles.actionContainer}>
        <Button
          label={true}
          size={40}
          value={'Jogar'}
          actionType={'navigation'}
          action={'game'}
          color={colors[3]}
          shadowColor={colors[4]}
          name={'dice'}
        />
        <Button
          label={true}
          size={40}
          value={'Config'}
          actionType={'navigation'}
          action={'settings'}
          color={colors[3]}
          shadowColor={colors[4]}
          name={'cogs'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    paddingTop: '70%',
    paddingHorizontal: '2%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors[1],
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 80,
    color: colors[3],
    textShadowColor: colors[4],
    textShadowRadius: 10,
    textShadowOffset: {height: 1, width: -1}
  },
  actionContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  content: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    textShadowColor: colors[4],
    textShadowRadius: 10,
    textShadowOffset: {height: 1, width: -1}
  }
});