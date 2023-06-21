import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function index(props) {
  const { value, action, color, shadowColor, name } = props;
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={action}>
      <FontAwesome5 name={name} style={styles.content} color={color} shadowColor={shadowColor} />
      <Text style={styles.content} color={color} shadowColor={shadowColor}>{value}</Text>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  btnContainer:{
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    textShadowRadius: 2,
    textShadowOffset: {height: 1, width: -1}
  }
});