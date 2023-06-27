import { Dimensions, SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalToggle, addTheme } from '../../redux/themesSlice';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import Modal from '../../components/Modal';

const { width, height } = Dimensions.get('window');

const filterH = width > height ? width: height;

export default function Themes() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const gameThemes = useSelector(state => state.persistedReducer.themes);
  const colors = useSelector(state => state.persistedReducer.colorTheme.colors);
  const DATA = gameThemes.themeData;
  
  return (
    <SafeAreaView style={{...styles.container, backgroundColor: colors[4]}}>
      <Text style={{...styles.title, color: colors[1], textShadowColor: colors[0]}}>
        TEMAS
      </Text>
      <View style={styles.contentContainer}>
      <View style={{width:'80%',}}>
        <Modal />
      </View>
        <FlatList  
          data={DATA}
          renderItem={({item}) => <ListItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <Button
              isHorizontal={false}
              label={true}
              size={filterH/24}
              value={'Adicionar Tema'}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'plus'}
              action={(e) => dispatch(addTheme(e))}
              onClick={() => dispatch(modalToggle(true))}
              
          />
      <View style={styles.navContainer}>
          <Button
              isHorizontal={false}
              label={true}
              size={filterH/24}
              value={'Config'}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'cogs'}
              onClick={() => navigation.navigate('settings')}
              
          />
          <Button
              isHorizontal={false}
              label={true}
              size={filterH/24}
              value={'Jogar'}
              color={colors[1]}
              shadowColor={colors[0]}
              name={'dice'}
              onClick={() => navigation.navigate('game')}
          />
        </View>
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
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: filterH/24,
    textShadowRadius: 1,
    textShadowOffset: {height: filterH/234, width: -filterH/234}
  },
  contentContainer: {
    height: '70%',
    width: '100%',
  },
  navContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
});