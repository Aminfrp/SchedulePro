import {ColorValue} from 'react-native';

const COLORS: {
  primary: ColorValue;
  light_text: ColorValue;
  input_text: ColorValue;
  secondary: ColorValue;
} = {
  primary: '#1D7BE9',
  light_text: '#625D5D',
  input_text: '#BDBDBD',
  secondary: '#F5F5F5',
};

export default {
  text: {
    primary: {
      color: COLORS.primary,
    },
    light_text: {
      color: COLORS.light_text,
    },
    input_text: {
      color: COLORS.input_text,
    },
  },
  bg: {
    primary: {
      backgroundColor: COLORS.primary,
    },
    secondary: {
      backgroundColor: COLORS.secondary,
    },
  },
};
