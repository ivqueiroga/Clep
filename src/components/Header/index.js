import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {  StatusBar, Platform } from "react-native";
import {data} from '../../utils/data';
const { colors } = data;

const headerHeight = Platform.OS === 'android'? StatusBar.currentHeight + 22 : 60;

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Temas em Jogo:</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    height: headerHeight,
    width: '100%',
    backgroundColor: colors[3],
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'red',
    shadowOffset: {height: -5}
  },
  headerText: {
    marginHorizontal: 5,
    fontFamily: 'Orbitron-Regular',
    color: colors[1],
    textShadowColor: colors[4],
    textShadowRadius: 2,
    textShadowOffset: {height: 1, width: -1}
  }
});