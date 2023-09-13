import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
import ChevronDownIcon from "../../assets/icons/CollapseChevronDownIcon"

interface IProps {
  title: string;
}

const BaseCollapse = (props: PropsWithChildren<IProps>) => {
  const { children, title } = props;

  const [open, toggle] = React.useState(false);

  const rotateIcon = new Animated.Value(0);
  const ExpandContent = new Animated.Value(0);

  const interpolatedRotate = rotateIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const interpolatedExpand = ExpandContent.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const toggleCollapse = () => {
    rotateIcon.setValue(open ? 1 : 0);
    ExpandContent.setValue(open ? 1 : 0);

    Animated.timing(rotateIcon, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start(() => toggle(!open));

    Animated.timing(ExpandContent, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View style={styles.container} >
      <TouchableOpacity className='flex-row items-center justify-between' onPress={toggleCollapse}>
        <Text>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: interpolatedRotate }] }}>
          <ChevronDownIcon />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={{ maxHeight: interpolatedExpand, overflow: "hidden" }}>
        {children}
      </Animated.View>
    </View >
  )
}

export default React.memo(BaseCollapse)

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "#1D7BE91A",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
  }
})