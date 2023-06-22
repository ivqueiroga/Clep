import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import {data} from '../../utils/data';
const { colors } = data;
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../components/Button';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        TEMAS
      </Text>
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
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    textShadowColor: colors[4],
    textShadowRadius: 10,
    textShadowOffset: {height: 1, width: -1}
  },
});