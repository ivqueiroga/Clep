import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import {data} from '../../utils/data';
const { colors } = data;
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../components/Button';

export default function index() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log(state)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        C L E P
      </Text>
      <View style={styles.actionContainer}>
        <Button value={'Jogar'} action={console.log('cliquei')} color={colors[3]} shadowColor={colors[4]} name={'dice'}/>
        <Button value={'Config'} action={console.log('cliquei')} color={colors[3]} shadowColor={colors[4]} name={'cogs'}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
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
    textShadowRadius: 2,
    textShadowOffset: {height: 1, width: -1}
  },
  actionContainer: {
    flexDirection: 'row',
  }
});