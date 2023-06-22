import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react';
import {data} from '../../utils/data';
const { colors } = data;
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../components/Button';

export default function index() {
  const gameTime = useSelector(state => state.persistedReducer.counter);
  const gameThemes = useSelector(state => state.persistedReducer.themes);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        CONFIGURAÇÕES
      </Text>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Tempo por rodada</Text>
        <View style={styles.configContentContainer}>
          <Button
              label={false}
              size={20}
              actionType={'setTime'}
              action={'subtract'}
              color={colors[3]}
              shadowColor={colors[4]}
              name={'minus'}
          />
          <Text style={styles.input}>
            {gameTime.isCustomOn ? gameTime.setTime : gameTime.defaultTime}
          </Text>
          <Button
              label={false}
              size={20}
              actionType={'setTime'}
              action={'add'}
              color={colors[3]}
              shadowColor={colors[4]}
              name={'plus'}
          />
        </View>
        <Button
              label={true}
              size={20}
              actionType={'resetTime'}
              action={'reset'}
              color={colors[3]}
              shadowColor={colors[4]}
              name={'backward'}
              value={'Resetar'}
          />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Temas</Text>
        <View style={styles.configContentContainer}>
          <Button
                label={true}
                size={20}
                actionType={'resetThemes'}
                action={'reset'}
                color={colors[3]}
                shadowColor={colors[4]}
                name={'backward'}
                value={'Resetar'}
            />
          <Text style={styles.input}>
          {gameThemes.isCustomOn ? gameThemes.setThemes.length : gameThemes.defaultThemes.length}
          </Text>
          <Button
                label={true}
                size={20}
                actionType={'resetThemes'}
                action={'reset'}
                color={colors[3]}
                shadowColor={colors[4]}
                name={'wrench'}
                value={'Editar'}
            />
        </View>
      </View>
      <View style={styles.configContentContainer}>
          <Button
              label={true}
              size={40}
              value={'Home'}
              actionType={'navigation'}
              action={'home'}
              color={colors[3]}
              shadowColor={colors[4]}
              name={'home'}
          />
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
    backgroundColor: colors[1],
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 30,
    color: colors[3],
    textShadowColor: colors[4],
    textShadowRadius: 10,
    textShadowOffset: {height: 1, width: -1}
  },
  content: {
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '5%',
    alignItems: 'center',
  },
  contentTitle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    textShadowColor: colors[4],
    textShadowRadius: 2,
    textShadowOffset: {height: 1, width: -1}
  },
  configContentContainer: {
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
    backgroundColor: colors[3],
    fontFamily: 'Orbitron-Bold',
    color: colors[1],
    textShadowColor: colors[4],
    textShadowRadius: 10,
    textShadowOffset: {height: 1, width: -1}
  }
});