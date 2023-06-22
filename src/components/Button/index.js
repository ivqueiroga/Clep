import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addTime, subTime, resetToCustomTime } from '../../redux/counterSlice';

export default function index(props) {
  const { label, value, actionType, action, color, shadowColor, name, size } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const actionHandle = () => {
    switch (actionType) {
      case 'navigation':
        navigation.navigate(action);
        break;
      case 'setTime':
        action === 'add' ? dispatch(addTime()) : dispatch(subTime());
        break;
      case 'resetTime':
        dispatch(resetToCustomTime());
        break;
      default:
        break;
    }
  }

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={actionHandle}>
      <FontAwesome5 name={name} style={{...styles.content, textShadowColor: shadowColor, fontSize: size}} color={color} />
      { label &&
        <Text style={{...styles.content, textShadowColor: shadowColor, color: color}}>{value}</Text>
      }
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  btnContainer:{
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontFamily: 'Orbitron-Bold',
    textShadowRadius: 10,
    textShadowOffset: {height: 1, width: -1}
  }
});