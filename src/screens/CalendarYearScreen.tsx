import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import CalendarHeader from "../components/specific/calendar/CalendarHeader";
import ChevLeftIcon from "../assets/icons/calendar/ChevLeft";
import ChevRightIcon from "../assets/icons/calendar/ChevRight";
import dayjs from "dayjs";
import { getMonth } from "../utils";
import colors from "../constants/colors";

const CalendarYearScreen = () => {
  const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { width, height } = useWindowDimensions();
  const [year, setYear] = useState(2023);
  const isToday = (day) => day.isSame(dayjs().format("YYYY-MM-DD"), "day");

  const setPrevYear = () => setYear((prev) => prev - 1);
  const setNextYear = () => setYear((prev) => prev + 1);

  return (
    <View className="flex-1 p-5" style={{ backgroundColor: "white" }}>
      <CalendarHeader handleToday={() => setYear(dayjs().year())}>
        <TouchableOpacity onPress={setPrevYear}>
          <ChevLeftIcon />
        </TouchableOpacity>
        <Text className="font-bold text-center" style={{ fontSize: 20 }}>
          {year}
        </Text>
        <TouchableOpacity onPress={setNextYear}>
          <ChevRightIcon />
        </TouchableOpacity>
      </CalendarHeader>
      <View className="flex-1 flex-row flex-wrap gap-3 pt-5">
        {MONTHS.map((month, index) => {
          return (
            <View
              key={index}
              className="pt-3"
              style={[
                styles.monthContainer,
                { width: (width / 3) * 0.84, height: height / 5.6 },
              ]}
            >
              <Text className="text-center font-bold" style={styles.month}>
                {month}
              </Text>
              <View className="flex-row gap-1 pt-2">
                {WEEKDAYS.map((day, idx) => {
                  return (
                    <Text
                      key={idx}
                      style={styles.day}
                      className="text-center font-bold"
                    >
                      {day}
                    </Text>
                  );
                })}
              </View>
              <View className="flex-row flex-wrap gap-1 pt-2">
                {getMonth(index, year).map((row, i) => {
                  return row.map((day, idx) => {
                    return (
                      <Text
                        key={idx + i}
                        style={[
                          {
                            fontSize: 8,
                            width: 12,
                            color: "#8D8C8C",
                          },
                          isToday(day)
                            ? styles.today
                            : dayjs().month(index).month() + 1 ===
                                day.month() + 1 && styles.dayInMonth,
                        ]}
                        className="text-center"
                      >
                        {day.date()}
                      </Text>
                    );
                  });
                })}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CalendarYearScreen;
const styles = StyleSheet.create({
  monthContainer: {},
  month: {
    fontSize: 12,
  },
  day: {
    width: 12,
    fontSize: 8,
  },
  dayInMonth: {
    color: "black",
  },
  today: {
    color: "white",
    ...colors.bg.primary,
    borderRadius: 2,
  },
});
