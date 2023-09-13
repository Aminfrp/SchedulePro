import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

interface Tab {
  title?: string;
  content: ReactNode;
}

interface IProps {
  titles: string[];
  contents: ReactNode[];
}

const Tab = (props: Tab) => {
  return (
    <View>
      <Text>{props.content}</Text>
    </View>
  );
};

const BaseTabbar = (props: IProps) => {
  const { titles, contents } = props;
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  return (
    <View>
      <View className="flex-row w-full pt-10">
        {titles.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabHeader}
              onPress={() => setActiveTabIndex(i)}
            >
              <Text
                className="pb-3"
                style={[
                  styles.tabTitle,
                  activeTabIndex === i ? styles.activeTab : styles.disableTab,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {contents[activeTabIndex]}
    </View>
  );
};

export default React.memo(BaseTabbar);

const styles = StyleSheet.create({
  tabHeader: {
    flexDirection: "row",
    flex: 1,
  },
  tabTitle: { width: "100%", textAlign: "center" },
  activeTab: {
    color: "#000000",
    borderBottomColor: colors.text.primary.color,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  disableTab: {
    color: "#B9C0C9",
  },
});
