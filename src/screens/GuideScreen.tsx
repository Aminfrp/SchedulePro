import { StyleSheet } from "react-native";
import React from "react";
import GuideStep from "../components/specific/guide/GuideStep";
import routes from "../constants/routes";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const GuideScreen = (props: IProps) => {
  const { navigation } = props;
  const GUIDE_SLIDES = [
    {
      title: "Your Title Here 1",
      description:
        "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Your Title Here 2",
      description:
        "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Your Title Here 3",
      description:
        "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
  ];

  const [activeSlideIndex, setActiveSlide] = React.useState(0);
  const activeSlideHandle = (index: number) => {
    if (activeSlideIndex === 2) {
      navigation.navigate(routes.signup);
      setTimeout(() => setActiveSlide(0), 500);
    } else setActiveSlide(index);
  };

  return (
    <>
      {GUIDE_SLIDES.map((slide, i) => {
        return i === activeSlideIndex ? (
          <GuideStep
            navigation={navigation}
            key={i}
            activeSlideIndex={i}
            activeSlideHandle={activeSlideHandle}
            title={slide.title}
            description={slide.description}
          />
        ) : null;
      })}
    </>
  );
};

export default GuideScreen;

const styles = StyleSheet.create({});
