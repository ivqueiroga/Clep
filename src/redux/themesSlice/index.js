import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

let id = 0

const defaultData = [
  {
    id:  1,
    theme:  'Adjetivo',
  },
  {
    id: 2,
    theme: 'Animal',
  },
  {
    id: 3,
    theme: 'App ou Site',
  },
  {
    id: 4,
    theme: 'Atriz/Ator',
  },
  {
    id: 5,
    theme: 'Banda',
  },
  {
    id: 6,
    theme: 'Marca/Modelo de Carro',
  },
  {
    id: 7,
    theme: 'CEP - Cidade, Estado, País',
  },
  {
    id: 8,
    theme: 'Comida',
  },
  {
    id: 9,
    theme: 'Cor',
  },
  {
    id: 10,
    theme: 'Desenho Animado',
  },
  {
    id: 11,
    theme: 'Doce',
  },
  {
    id: 12,
    theme: 'Eletro Eletrônico',
  },
  {
    id: 13,
    theme: 'Esporte',
  },
  {
    id: 14,
    theme: 'Filme/Série',
  },
  {
    id: 15,
    theme: 'Fruta, Verdura e Legume',
  },
  {
    id: 16,
    theme: 'Idioma',
  },
  {
    id: 17,
    theme: 'Instrumento Musical',
  },
  {
    id: 18,
    theme: 'Jogos',
  },
  {
    id: 19,
    theme: 'Livro',
  },
  {
    id: 20,
    theme: 'Marca',
  },
  {
    id: 21,
    theme: 'Meio de Transporte',
  },
  {
    id: 22,
    theme: 'Musica',
  },
  {
    id: 23,
    theme: 'Nome',
  },
  {
    id: 24,
    theme: 'Objeto',
  },
  {
    id: 25,
    theme: 'Parte do corpo humano',
  },
  {
    id: 26,
    theme: 'Planta',
  },
  {
    id: 27,
    theme: 'Profissão',
  },
  {
    id: 28,
    theme: 'Programa de TV',
  },
  {
    id: 29,
    theme: 'Remédio',
  },
  {
    id: 30,
    theme: 'Sabor de pizza',
  },
  {
    id: 31,
    theme: 'Super-Herói',
  },
  {
    id: 32,
    theme: 'Time',
  },
  {
    id: 33,
    theme: 'Verbo',
  },
  {
    id: 34,
    theme: 'Vestuário',
  },
  {
    id: 35,
    theme: 'Elemento tabela periódica',
  },
];

const DATASort = defaultData.sort(function (a, b) {
  let textA = a.theme.toLowerCase();
  let textB = b.theme.toLowerCase();
  return textA.localeCompare(textB)
});

const SORTER = (arr) => {
  arr.sort(function (a, b) {
    let textA = a.theme.toLowerCase();
    let textB = b.theme.toLowerCase();
    return textA.localeCompare(textB)
  });
  return arr;
};

export const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    defaultThemes: DATASort,
    isGameEngaged: false,
    isDefaultOn: true,
    setThemes: DATASort,
    isModalOn: false,
    editedTheme: {
      id: Number,
      theme: String,
    },
    randomTheme: [],
    isCustomOn: false,
  },
  reducers: {
    engageGame: (state) => {
        state.isGameEngaged = true;
    },
    useCustomThemes: (state, {payload}) => {

    },
    useDefaultThemes: (state, {payload}) => {
      state.setThemes = DATASort;
    },
    addTheme: (state, {payload}) => {
      state.setThemes.push({
        id: uuid.v4(),
        theme: payload
      });
      state.setThemes = SORTER(state.setThemes);
    },
    editTheme: (state, {payload}) => {
      const OLD = state.setThemes.filter(theme => theme.id !== payload.id);
      const NEW = OLD.push({id: payload.id, theme: payload.theme});
      state.setThemes = NEW;
    },
    deleteTheme: (state, {payload}) => {
      state.setThemes = state.setThemes.filter((theme) => theme.id !== payload);
    },
    modalToggle: (state, {payload}) => {
      state.isModalOn = payload;
    },
  },
});

export const { useThemes, useDefaultThemes, addTheme, editTheme, deleteTheme, engageGame, modalToggle } = themesSlice.actions

export const selectTheme = state => state.curtheme

export default themesSlice.reducer;
