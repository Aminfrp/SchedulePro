import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import fontSize from "../../../constants/fontSize";
import { AirbnbRating } from "react-native-ratings";
import CommentIcon from "../../../assets/icons/business/CommentIcon";
import DrinkIcon from "../../../assets/icons/business/DrinkIcon";
import CreditIcon from "../../../assets/icons/business/CreditIcon";
import WorldIcon from "../../../assets/icons/business/WorldIcon";
import ChevronDownIcon from "../../../assets/icons/CollapseChevronDownIcon";
import colors from "../../../constants/colors";
import BaseProgressBar from "../../base/BaseProgressBar";
import CommentCard from "./CommentCard";
import BottomSheet from "@gorhom/bottom-sheet";
import NewComment from "./NewComment";

interface IProps {
  title: string;
  description: string;
  rate: number;
}

const Overview = (props: IProps) => {
  const { title, description, rate } = props;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const items = [
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg",
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg",
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg",
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg",
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg",
  ];
  const jobs = [
    {
      jobName: "Web Developer",
      description:
        "Responsible for designing and developing web applications using modern technologies.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    },
    {
      jobName: "Data Analyst",
      description:
        "Analyze large datasets to provide insights and support data-driven decision-making.",
      imageUrl:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg",
    },
    {
      jobName: "Graphic Designer",
      description:
        "Create visually appealing designs for various mediums, including print and digital.",
      imageUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg",
    },
    {
      jobName: "Software Engineer",
      description:
        "Design, develop, and maintain software applications to meet specific business requirements.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4NAwrInfpEhTT3Kti5eMA6/e5e7a301fc824d01dda224830a065135/GettyImages-1341554760.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    },
    {
      jobName: "Marketing Manager",
      description:
        "Develop and implement marketing strategies to promote products or services.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7e5BSigG7s0OI5FnjzNZeu/74ca690e1273d71a118cdc10c2204268/GettyImages-1199434187.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    },
  ];

  const handleScrollImage = (e) => {
    const a = e.nativeEvent.contentOffset.x / Dimensions.get("window").width;
    setActiveIndex(Math.round(a));
  };
  const handleScrollComment = (e) => {
    const a = e.nativeEvent.contentOffset.x / Dimensions.get("window").width;
    setActiveCommentIndex(Math.round(a));
  };
  const snapPoints = useMemo(() => ["1", "70%"], []);
  const handleSheetChanges = useCallback((index: number) => {}, []);

  const width = Dimensions.get("window").width / 80;
  const commentWidth = Dimensions.get("window").width / 300;

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCommentIndex, setActiveCommentIndex] = useState(0);

  return (
    <View className="py-5">
      {/* info */}
      <Text className="font-bold" style={styles.title}>
        {title}
      </Text>
      <View className="flex-row pt-2 gap-2 items-center">
        <AirbnbRating
          starContainerStyle={{
            width: "100%",
            marginTop: 10,
            justifyContent: "flex-start",
            paddingLeft: 5,
          }}
          showRating={false}
          size={15}
          defaultRating={5}
        />
        <Text className="font-bold">5</Text>
      </View>
      <View className="py-3 flex-row items-center gap-2">
        <CommentIcon />
        <Text>158 reviews</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <DrinkIcon />
        <Text>Asian- Italian- Indian</Text>
      </View>
      <View className="py-3 flex-row items-center gap-2">
        <CreditIcon />
        <Text>$$$</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <WorldIcon />
        <Text>Spoken Language</Text>
      </View>
      {/* description */}
      <Text className="pt-5 pb-2 font-bold" style={styles.title}>
        Description
      </Text>
      <Text>{description}</Text>
      {/* images */}
      <Text className="pt-5 pb-2 font-bold" style={styles.title}>
        Photos
      </Text>
      <FlatList
        data={items}
        horizontal
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        onScroll={handleScrollImage}
        renderItem={({ item, index }) => (
          <Image source={{ uri: item }} style={styles.image}></Image>
        )}
      ></FlatList>
      {/* image slider pagination */}
      <View className="flex-row pt-3 justify-center gap-1">
        {Array(Math.ceil(items.length / width))
          .fill(null)
          .map((_, i) => {
            return (
              <View
                key={i}
                style={[
                  styles.pagination,
                  {
                    backgroundColor: activeIndex === i ? "#1D7BE9" : "#F2F2F2",
                  },
                ]}
              ></View>
            );
          })}
      </View>
      {/* rating */}
      <View className="flex-row items-center justify-between pt-10">
        <Text className="font-bold" style={styles.title}>
          Rating Overview
        </Text>
        <TouchableOpacity
          className="flex-row items-center gap-2"
          onPress={() => bottomSheetRef.current.expand()}
        >
          <Text style={styles.link}>Write a comment</Text>
          <View style={{ transform: [{ rotate: "270deg" }] }}>
            <ChevronDownIcon />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row pt-5">
        <View className="flex-2 gap-5 pr-2">
          <Text className="font-bold text-center" style={styles.rateNum}>
            4.0
          </Text>
          <Text className="text-center" style={{ color: "#B9C0C9" }}>
            (out of 5){" "}
          </Text>
          <Text>Average of 158 reviews </Text>
        </View>
        <View className="flex-1 px-5 items-center justify-between">
          <View className="flex-row items-center gap-1">
            <BaseProgressBar value={5} />
            <Text className="pb-1">5</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <BaseProgressBar value={4} />
            <Text className="pb-1">4</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <BaseProgressBar value={3} />
            <Text className="pb-1">3</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <BaseProgressBar value={2} />
            <Text className="pb-1">2</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <BaseProgressBar value={1} />
            <Text className="pb-1">1</Text>
          </View>
        </View>
      </View>
      {/* comments */}
      <TouchableOpacity className="flex-row-reverse items-center gap-2 py-5 slef-end w-full">
        <View style={{ transform: [{ rotate: "270deg" }] }}>
          <ChevronDownIcon />
        </View>
        <Text style={styles.link}>View all</Text>
      </TouchableOpacity>

      <FlatList
        data={jobs}
        horizontal
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        onScroll={handleScrollComment}
        renderItem={({ item, index }) => (
          <CommentCard
            name={item.jobName}
            rate={5}
            description={item.description}
            avatar={item.imageUrl}
          />
        )}
      ></FlatList>
      {/* comment slider pagination */}
      <View className="flex-row pt-3 justify-center gap-1">
        {Array(Math.ceil(jobs.length / commentWidth))
          .fill(null)
          .map((_, i) => {
            return (
              <View
                key={i}
                style={[
                  styles.pagination,
                  {
                    backgroundColor:
                      activeCommentIndex === i ? "#1D7BE9" : "#F2F2F2",
                  },
                ]}
              ></View>
            );
          })}
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backgroundStyle={{
          backgroundColor: "#F2F2F2",
        }}
      >
        <NewComment />
      </BottomSheet>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  title: {
    ...fontSize.md,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  pagination: {
    width: 25,
    height: 8,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
  },
  link: {
    ...colors.text.primary,
  },
  rateNum: {
    ...fontSize.xl,
  },
});
