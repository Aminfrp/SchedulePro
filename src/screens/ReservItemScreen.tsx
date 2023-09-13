import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { AirbnbRating } from "react-native-ratings";
import DateIcon from "../assets/icons/reservation/DateIcon"
import TimeIcon from "../assets/icons/reservation/TimeIcon"
import LocationIcon from "../assets/icons/reservation/LocationIcon"
import PeopleIcon from "../assets/icons/reservation/PeopleIcon"
import PhoneIcon from "../assets/icons/reservation/PhoneIcon"
import BaseButton from "../components/base/BaseButton";

const ReservItemScreen = (props) => {
  const item = props.route.params.item
  return (
    <View style={styles.container} className='px-5'>
      <Image source={{ uri: item.imageUrl }} style={styles.reserveItemImage} className='mt-5' />
      <Text className='font-bold py-3'>{item.jobName}</Text>
      <View className='flex-row items-center gap-2 pt-3 pb-1'>
        <AirbnbRating
          starContainerStyle={{ gap: 1, justifyContent: "flex-start", paddingBottom: 0, alignItems: "center" }}
          showRating={false}
          size={10}
          defaultRating={5}
        />
        <Text className='mb-2'>5.5</Text>
      </View>
      <Text className='font-bold pt-10'>
        Your Reservation Details
      </Text>


      <View className='flex-row items-center gap-2 pt-3 pb-1'>
        <PeopleIcon />
        <Text>5 people</Text>
      </View>

      <View className='flex-row items-center gap-2 py-1'>
        <DateIcon />
        <Text>{item.date}</Text>
      </View>

      <View className='flex-row items-center gap-2 py-1'>
        <TimeIcon />
        <Text>{item.time}</Text>
      </View>

      <View className='flex-row items-center gap-2 py-1'>
        <LocationIcon />
        <Text>Europaweg, Amsterdam
          2711EP
        </Text>
      </View>

      <View className='flex-row items-center gap-2 py-1'>
        <PhoneIcon />
        <Text>0687904917</Text>
      </View>

      <View className='flex-row mt-auto pb-5 justify-between'>
        <View className='flex-1 mr-3'>
          <BaseButton btnStyle={{ backgroundColor: "#E91D1D" }} pressHandle={() => { }} >
            <Text className="font-bold" style={{ color: "white" }}>Cancle Booking</Text>
          </BaseButton>
        </View>
        <View className='flex-1 ml-3'>
          <BaseButton pressHandle={() => { }}>
            <Text className="font-bold" style={{ color: "white" }}>Navigate</Text>
          </BaseButton>
        </View>
      </View>
    </View>
  )
}

export default ReservItemScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  reserveItemImage: {
    width: "100%",
    height: Dimensions.get("window").height * 0.25,
    borderRadius: 10
  }
})