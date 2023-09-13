import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BaseTextField from "../components/base/BaseTextField";
import BaseDropDown from "../components/base/BaseDropDown";
import BaseButton from "../components/base/BaseButton";
import BaseCheckBox from "../components/base/BaseCheckBox";

const AddCardScreen = () => {
  return (
    <ScrollView
      className="flex-1 p-5"
      contentContainerStyle={{ paddingBottom: 30 }}
      style={{ backgroundColor: "white" }}
    >
      <BaseDropDown
        onChange={() => {}}
        label="Credit card name"
        placeholder="Select an option"
        items={[
          { key: "Iran", value: "Iran" },
          { key: "Canada", value: "Canada" },
          { key: "Netherlands", value: "Netherlands" },
        ]}
      />
      <BaseTextField
        onChange={() => {}}
        label="Card holder full name"
        placeholder="Samira Abasi"
        customClassName="py-3"
      />
      <BaseTextField
        onChange={() => {}}
        label="Card number"
        placeholder="Eg.  3282 3282 3282 3282"
      />
      <View className="flex-row py-3">
        <BaseDropDown
          onChange={() => {}}
          customClassName="flex-1"
          label="Month"
          placeholder="02"
          items={[
            { key: "Iran", value: "Iran" },
            { key: "Canada", value: "Canada" },
            { key: "Netherlands", value: "Netherlands" },
          ]}
        />
        <BaseDropDown
          onChange={() => {}}
          label="Year"
          customClassName="flex-1 mx-2"
          placeholder="2023"
          items={[
            { key: "Iran", value: "Iran" },
            { key: "Canada", value: "Canada" },
            { key: "Netherlands", value: "Netherlands" },
          ]}
        />
        <BaseDropDown
          onChange={() => {}}
          label="CVV"
          customClassName="flex-1"
          placeholder="000"
          items={[
            { key: "Iran", value: "Iran" },
            { key: "Canada", value: "Canada" },
            { key: "Netherlands", value: "Netherlands" },
          ]}
        />
      </View>
      <BaseTextField
        onChange={() => {}}
        label="Billing address"
        placeholder="Europaweg 75F"
      />
      <BaseTextField
        customClassName="py-3"
        onChange={() => {}}
        label="Zip code"
        placeholder="2711EP"
      />
      <BaseTextField onChange={() => {}} label="City" placeholder="Amsterdam" />
      <BaseDropDown
        customClassName="py-3"
        onChange={() => {}}
        label="Country"
        placeholder="Select an option"
        items={[
          { key: "Iran", value: "Iran" },
          { key: "Canada", value: "Canada" },
          { key: "Netherlands", value: "Netherlands" },
        ]}
      />
      <BaseCheckBox label="Save my payment details for future purchases." />
      <BaseButton
        pressHandle={() => {}}
        btnStyle={{ width: "50%", alignSelf: "flex-end", marginTop: 20 }}
      >
        <Text style={{ color: "white" }}>Save Card</Text>
      </BaseButton>
    </ScrollView>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({});
