import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalToggle } from '../../redux/themesSlice';
import { deleteTheme } from '../../redux/themesSlice';
import Button from '../Button';

export default function index({item}) {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const [themeState, setThemeState] = useState({
    id: item.id,
    theme: item.theme,
    isModalOn: true,
  });

  const createTwoButtonAlert = () =>
    Alert.alert('Delete', `Tem certeza que deseja deletar o tema ${item.theme}`, [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(deleteTheme(item.id))},
    ]);

  const handleDeletion = () => {
    createTwoButtonAlert();
  };

  // const modalHandler = () => {
  //   dispatch(modalToggle(themeState));
  // };

  return (
    <View style={{...styles.listItemContainer, backgroundColor: colors[1]}}>
      <TouchableOpacity 
      // onPress={() => modalHandler()}
      >
        <Text style={{...styles.content, color: colors[0], textShadowColor: colors[1]}}>
          {item.theme}
        </Text>
      </TouchableOpacity>
      <Button
          isHorizontal={false}
          label={false}
          size={20}
          value={'Lixo'}
          color={colors[0]}
          shadowColor={colors[1]}
          name={'trash-alt'}
          onClick={() => handleDeletion()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '5%',
    marginTop: 10,
  },
  content: {
    height: 40,
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    textAlignVertical: 'center',
    textShadowRadius: 1,
    textShadowOffset: {height: 1, width: -1},
    width: 300,
  },
});