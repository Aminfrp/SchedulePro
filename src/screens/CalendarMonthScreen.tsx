import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
  ScrollView,
  GestureResponderEvent,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import CalendarHeader from "../components/specific/calendar/CalendarHeader";
import ChevLeftIcon from "../assets/icons/calendar/ChevLeft";
import ChevRightIcon from "../assets/icons/calendar/ChevRight";
import dayjs from "dayjs";
import { getMonth } from "../utils";
import colors from "../constants/colors";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import LocationIcon from "../assets/icons/reservation/LocationIcon";
import DateIcon from "../assets/icons/reservation/DateIcon";
import TimeIcon from "../assets/icons/reservation/TimeIcon";
import PeopleIcon from "../assets/icons/reservation/PeopleIcon";
import PhoneIcon from "../assets/icons/reservation/PhoneIcon";

const CalendarMonthScreen = () => {
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleNextMounth = () => setMonthIndex((prev) => prev + 1);
  const handlePrevMounth = () => setMonthIndex((prev) => prev - 1);

  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [days, setDays] = useState(getMonth());
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    setDays(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <View className="flex-1 p-5" style={{ backgroundColor: "white" }}>
      <CalendarHeader handleToday={() => setMonthIndex(dayjs().month())}>
        <View className="flex-1 justify-center flex-row items-center gap-5">
          <TouchableOpacity onPress={handlePrevMounth}>
            <ChevLeftIcon />
          </TouchableOpacity>
          <Text className="font-bold text-center" style={{ minWidth: 100 }}>
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM")}
          </Text>
          <TouchableOpacity onPress={handleNextMounth}>
            <ChevRightIcon />
          </TouchableOpacity>
        </View>
      </CalendarHeader>
      <View className="pt-5">
        {/* week days */}
        <View className="flex-row pb-2">
          {WEEKDAYS.map((day, i) => (
            <Text key={i} className="flex-1" style={styles.weekDay}>
              {day}
            </Text>
          ))}
        </View>
        {/* days */}
        <View className="flex-row flex-wrap" style={styles.days}>
          {days.map((row, index) => {
            return row.map((day, i) => {
              return (
                <Day
                  monthIndex={monthIndex}
                  key={i}
                  day={day}
                  selectEvent={setCurrentEvent}
                ></Day>
              );
            });
          })}
        </View>
      </View>
      {currentEvent?.title && (
        <View className="pt-5 gap-3">
          <Text className="font-bold">{currentEvent?.title}</Text>
          <View>
            <View className="flex-row gap-2 items-center">
              <DateIcon />
              <Text>Thursday 6 April</Text>
            </View>
          </View>
          <View>
            <View className="flex-row gap-2 items-center">
              <TimeIcon />
              <Text>6:30 p.m.</Text>
            </View>
          </View>
          <View>
            <View className="flex-row gap-2 items-center">
              <PeopleIcon />
              <Text>2 people</Text>
            </View>
          </View>
          <View>
            <View className="flex-row gap-2 items-center">
              <LocationIcon />
              <Text>
                Max Euweplein 57-61, Amsterdam, Noord Holland, Netherlands, 1017
                MA
              </Text>
            </View>
          </View>
          <View>
            <View className="flex-row gap-2 items-center">
              <PhoneIcon />
              <Text>+31 20 888 1358</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

interface IDayProps {
  day: dayjs.Dayjs;
  monthIndex: number;
  selectEvent: (event: any) => void;
}

const Day = (props: IDayProps) => {
  const events = useSelector((state: RootState) => state.calendar.events);

  const { day, monthIndex, selectEvent } = props;
  const isToday = () => day.isSame(dayjs().format("YYYY-MM-DD"), "day");
  const setDayColor = () =>
    isToday()
      ? styles.today
      : dayjs().month(monthIndex).month() + 1 === day.month() + 1 &&
        styles.dayInMonth;
  const currentEvents = () =>
    events.filter((event) => dayjs(day).isSame(dayjs(event.from), "day"));
  const findEventStyle = (type: string): StyleProp<ViewStyle> => {
    switch (type) {
      case "Event":
        return {
          borderRadius: 5,
          padding: 2,
          backgroundColor: "#FF5F00",
        };
      case "Appointment":
        return {
          borderRadius: 5,
          padding: 2,
          backgroundColor: "#04D056",
        };
      case "Canceled by business":
        return {
          borderRadius: 5,
          padding: 2,
          borderWidth: 0.5,
          borderColor: "#000000",
          borderStyle: "solid",
        };
      case "Canceled by yourself":
        return {
          borderRadius: 5,
          padding: 2,
          borderWidth: 0.5,
          borderColor: "#E91D1D",
          borderStyle: "solid",
        };
      default:
        return {
          backgroundColor: colors.bg.primary.backgroundColor,
          borderRadius: 5,
          padding: 2,
        };
    }
  };
  const findEventTextStyle = (type: string): StyleProp<TextStyle> => {
    switch (type) {
      case "Canceled by business":
        return {
          color: "#000000",
        };
      case "Canceled by yourself":
        return {
          color: "#E91D1D",
        };
      default:
        return {
          color: "white",
        };
    }
  };

  return (
    <View style={styles.dayContainer}>
      <Text style={[styles.day, setDayColor()]} className="p-1">
        {day.date()}
      </Text>
      <ScrollView className="p-1">
        {currentEvents().map((event, i) => (
          <TouchableOpacity
            key={i}
            className="items-center"
            style={findEventStyle(event.type)}
            onPress={() => selectEvent(event)}
          >
            <Text
              numberOfLines={1}
              style={[styles.eventTitle, findEventTextStyle(event.type)]}
            >
              {event.type}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CalendarMonthScreen;

const styles = StyleSheet.create({
  weekDay: {
    fontSize: 8,
    textAlign: "center",
  },
  days: {
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#cccccc",
  },
  dayContainer: {
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#cccccc",
    width: Dimensions.get("window").width / 7 - 5.81,
    height: Dimensions.get("window").width / 7 - 5.81,
  },
  day: {
    fontSize: 10,
    color: "#8D8C8C",
  },
  today: {
    ...colors.text.primary,
  },
  dayInMonth: {
    color: "black",
  },
  eventTitle: {
    fontSize: 7,
  },
});
