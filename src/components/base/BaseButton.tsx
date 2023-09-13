import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

interface IProps {
  pressHandle: (event: GestureResponderEvent) => void;
  outlined?: boolean;
  btnStyle?: StyleProp<ViewStyle>;
}

const BaseButton = (props: React.PropsWithChildren<IProps>) => {
  const { children, pressHandle, outlined, btnStyle } = props;

  return (
    <TouchableOpacity
      onPress={pressHandle}
      style={[outlined ? styles.outlinedBtn : styles.btn, btnStyle || {}]}
      className="items-center">
      {children}
    </TouchableOpacity>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  btn: {
    ...colors.bg.primary,
    paddingVertical: 15,
    borderRadius: 100,
  },
  outlinedBtn: {
    paddingVertical: 15,
    borderColor: '#000000',
    borderRadius: 100,
    borderWidth: 1,
  },
});
