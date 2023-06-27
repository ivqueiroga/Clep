import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addTime, subTime, resetToCustomTime, timerControl } from '../../redux/counterSlice';
import {  engageGame  } from '../../redux/themesSlice';

export default function index(props) {
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);

  const gameTime = useSelector(state => state.persistedReducer.counter);
  const {
    isHorizontal,
    label,
    value,
    color,
    shadowColor,
    name,
    size,
    disabled,
    onClick,
  } = props;

  return (
    <TouchableOpacity name={name} style={isHorizontal 
      ? {...styles.btnContainerHori, backgroundColor: colors[1], shadowColor: colors[1]} 
      : styles.btnContainer
    } onPress={onClick} disabled={disabled}>
      <FontAwesome5 name={name} style={{...styles.content, textShadowColor: shadowColor, fontSize: size}} color={color} />
      { label &&
        <Text style={{...styles.content, textShadowColor: shadowColor, color: color, fontSize: isHorizontal ? size/1.1 : size/1.8}}>{value}</Text>
      }
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  btnContainerHori: {
    paddingHorizontal: '5%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 60,
    width: '90%',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 15,
  },
  btnContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    height: 40,
  },
  content: {
    textAlignVertical:  'center',
    textAlign: 'center',
    fontFamily: 'Orbitron-Bold',
    textShadowRadius: 1,
    textShadowOffset: {height: 1, width: -1},
    // width: '80%',
    // width: 60,
    // height: 40,
  }
});