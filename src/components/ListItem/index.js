import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTheme } from '../../redux/themesSlice';
import Button from '../Button';

const { width, height } = Dimensions.get('window');
const filterW = width > height ? height : width;
const filterH = width > height ? width: height;

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
          size={filterH/35}
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
    borderRadius: filterH/140,
    paddingHorizontal: '5%',
    marginTop: filterH/70,
  },
  content: {
    height: filterH/15,
    fontFamily: 'Orbitron-Bold',
    fontSize: filterH/39,
    textAlignVertical: 'center',
    textShadowRadius: 1,
    textShadowOffset: {height: filterH/700, width: -filterH/700},
    width: filterW/1.4,
  },
});