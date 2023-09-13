import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { AirbnbRating } from "react-native-ratings";
import BaseButton from "../../base/BaseButton";
import colors from "../../../constants/colors";
import * as ImagePicker from "expo-image-picker";

const NewComment = () => {
  const [hasGallaryPremission, setHasGallaryPremission] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const gallaryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGallaryPremission(gallaryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    if (hasGallaryPremission) {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (result.assets[0].uri) {
          setImages((prev) => [...prev, result.assets[0].uri]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View className="px-5 flex-1">
      <Text>Choose a star to rate</Text>
      <AirbnbRating
        starContainerStyle={{
          width: "100%",
          marginTop: 10,
          justifyContent: "flex-start",
        }}
        showRating={false}
        size={15}
        defaultRating={0}
      />
      <Text className="pt-2">Write a review (optional) </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.textArea}
        className="mt-3 p-3 text-start"
      />
      <Text className="py-5">Upload photos (optional)</Text>
      <BaseButton pressHandle={pickImage} outlined btnStyle={styles.addPhoto}>
        <Text style={{ ...colors.text.primary }}>Add photos</Text>
      </BaseButton>
      <View className="flex-row py-5 gap-3 flex-wrap">
        {images.length !== 0 &&
          images.map((uri, key) => (
            <Image source={{ uri }} key={key} style={styles.images} />
          ))}
      </View>
      <View className="mt-auto items-center w-full pb-3">
        <BaseButton pressHandle={() => {}}>
          <Text style={{ color: "white", width: 150, textAlign: "center" }}>
            Submit
          </Text>
        </BaseButton>
      </View>
    </View>
  );
};

export default NewComment;

const styles = StyleSheet.create({
  textArea: {
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 150,
    textAlignVertical: "top",
  },
  addPhoto: {
    borderColor: colors.text.primary.color,
    width: "40%",
  },
  images: { width: 70, height: 70, borderRadius: 10 },
});
