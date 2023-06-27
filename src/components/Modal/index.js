import { Dimensions, StyleSheet, Text, Modal, View, TouchableOpacity, TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalToggle, addTheme } from '../../redux/themesSlice';

import Button from '../Button';

const { width, height } = Dimensions.get('window');


const index = (onConfirm) => {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const isModalOn = useSelector(state => state.persistedReducer.themes.isModalOn);
  const [state, setState] = useState('');

  const closeHandler = () => {
    dispatch(modalToggle(false));
  };

  const confirmAction = () => {
    onConfirm;
    dispatch(addTheme(state));
    dispatch(modalToggle(false));
    setState('');
  }

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={isModalOn}
    >
      <View style={{...styles.container, backgroundColor: colors[4]}}>
        <TextInput maxLength={25} style={{...styles.input, backgroundColor: colors[0], color: colors[1], shadowColor: colors[0]}} value={state} onChangeText={(value) => setState(value)}/>
        <View style={styles.inputBtns}>
          <Button
            isHorizontal={false}
            label={false}
            size={height/24}
            value={'Cancel'}
            color={colors[1]}
            shadowColor={colors[0]}
            name={'times'}
            onClick={() => closeHandler()}
          />
          <Button
            isHorizontal={false}
            label={false}
            size={height/24}
            value={'Confirm'}
            color={colors[1]}
            shadowColor={colors[0]}
            name={'check'}
            onClick={() => confirmAction()}
          />
        </View>
      </View>
    </Modal>
  );
};

export default index

const styles = StyleSheet.create({
container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 5,
    paddingHorizontal: '5%',
    marginTop: height/3,
  },
  content: {
    marginVertical: 40,
    fontFamily: 'Orbitron-Bold',
    fontSize: height/20,
    textShadowRadius: 1,
    textShadowOffset: {height: height/140, width: -height/140}
  },
  input: {
    marginTop: '10%',
    width: '100%',
    height: height/11,
    fontFamily: 'Orbitron-Bold',
    textAlign: 'center',
    fontSize: height/35,
    borderRadius: 5,
    textShadowRadius: 1,
    textShadowOffset: {height: height/700, width: -height/700}
  },
  inputBtns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: '5%',
  },
});