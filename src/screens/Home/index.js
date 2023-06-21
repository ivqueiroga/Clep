import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import {data} from '../../utils/data';
const { colors } = data;
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';

export default function index() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log(state)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        C L E P
      </Text>
      <TouchableOpacity>
        <FontAwesome5 name="dice" size={24} color="black" />
        <Text>Jogar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
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
  }
});