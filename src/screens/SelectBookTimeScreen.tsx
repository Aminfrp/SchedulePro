import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseDropDown from "../components/base/BaseDropDown";
import BaseTextField from "../components/base/BaseTextField";
import BaseChips from "../components/base/BaseChips";
import BaseButton from "../components/base/BaseButton";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import routes from "../constants/routes";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SelectBookTimeScreen = (props: IProps) => {
  return (
    <View className="flex-1 p-5" style={{ backgroundColor: "white" }}>
      <BaseDropDown
        onChange={(item) => {}}
        label="Service"
        placeholder="Eg. Service A"
        items={[
          { key: "Iran", value: "Iran" },
          { key: "Canada", value: "Canada" },
          { key: "Netherlands", value: "Netherlands" },
        ]}
      />
      <BaseTextField
        onChange={() => {}}
        label="People"
        placeholder="Eg. 05"
        type="decimal-pad"
      />
      <BaseTextField
        onChange={() => {}}
        label="Date"
        placeholder="Eg. 24/05/2023"
      />
      <BaseTextField
        onChange={() => {}}
        label="Time"
        placeholder="6:30   p.m."
      />
      <Text className="font-bold py-3">Next Available time</Text>
      <View
        className="flex-row flex-wrap w-full justify-between"
        style={{ gap: 12 }}
      >
        <BaseChips text="5:30  p.m." customClassName="w-28" />
        <BaseChips
          text="5:30  p.m."
          customClassName="w-28"
          variant="disabled"
        />
        <BaseChips text="5:30  p.m." customClassName="w-28" variant="outline" />
        <BaseChips
          text="5:30  p.m."
          customClassName="w-28"
          variant="disabled"
        />
        <BaseChips text="5:30  p.m." customClassName="w-28" variant="outline" />
        <BaseChips text="5:30  p.m." customClassName="w-28" />
      </View>
      <BaseButton
        pressHandle={() => {
          props.navigation.navigate(routes.booking);
        }}
        btnStyle={{ alignSelf: "flex-end", marginTop: "auto", width: "45%" }}
      >
        <Text style={{ color: "white" }}>Next</Text>
      </BaseButton>
    </View>
  );
};

export default SelectBookTimeScreen;

const styles = StyleSheet.create({});
