import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
  PanResponder,
  LayoutChangeEvent,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import CalendarHeader from "../components/specific/calendar/CalendarHeader";
import ChevLeftIcon from "../assets/icons/calendar/ChevLeft";
import ChevRightIcon from "../assets/icons/calendar/ChevRight";
import dayjs from "dayjs";
import BottomSheet from "@gorhom/bottom-sheet";
import { useDispatch } from "react-redux";
import BaseTextField from "../components/base/BaseTextField";
import BaseButton from "../components/base/BaseButton";
import { addNewEvent } from "../store/calendarReducer";
import routes from "../constants/routes";
import custom from "dayjs/plugin/customParseFormat";
dayjs.extend(custom);

const CalendarDayScreen = (props) => {
  const [day, setDay] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [endTimeArray, setEndTimeArray] = useState([]);
  const [selectedEvent, setSelectEvent] = useState("");
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSheetChanges = useCallback((index: number) => {}, []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const newEventsRef = useRef(null);
  const timelineRef = useRef({});
  const dispatch = useDispatch();
  let startY = 0;
  let from = "";
  let to = "";
  const { height, width } = useWindowDimensions();
  const HOURS = [
    "12 AM",
    "12:15 AM",
    "12:30 AM",
    "12:45 AM",
    "1 AM",
    "01:15 AM",
    "01:30 AM",
    "01:45 AM",
    "2 AM",
    "02:15 AM",
    "02:30 AM",
    "02:45 AM",
    "3 AM",
    "03:15 AM",
    "03:30 AM",
    "03:45 AM",
    "4 AM",
    "04:15 AM",
    "04:30 AM",
    "04:45 AM",
    "5 AM",
    "05:15 AM",
    "05:30 AM",
    "05:45 AM",
    "6 AM",
    "06:15 AM",
    "06:30 AM",
    "06:45 AM",
    "7 AM",
    "07:15 AM",
    "07:30 AM",
    "07:45 AM",
    "8 AM",
    "08:15 AM",
    "08:30 AM",
    "08:45 AM",
    "9 AM",
    "09:15 AM",
    "09:30 AM",
    "09:45 AM",
    "10 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12 PM",
    "12:15 PM",
    "12:30 PM",
    "12:45 PM",
    "1 PM",
    "01:15 PM",
    "01:30 PM",
    "01:45 PM",
    "2 PM",
    "02:15 PM",
    "02:30 PM",
    "02:45 PM",
    "3 PM",
    "03:15 PM",
    "03:30 PM",
    "03:45 PM",
    "4 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "5 PM",
    "05:15 PM",
    "05:30 PM",
    "05:45 PM",
    "6 PM",
    "06:15 PM",
    "06:30 PM",
    "06:45 PM",
    "7 PM",
    "07:15 PM",
    "07:30 PM",
    "07:45 PM",
    "8 PM",
    "08:15 PM",
    "08:30 PM",
    "08:45 PM",
    "9 PM",
    "09:15 PM",
    "09:30 PM",
    "09:45 PM",
    "10 PM",
    "10:15 PM",
    "10:30 PM",
    "10:45 PM",
    "11 PM",
    "11:15 PM",
    "11:30 PM",
    "11:45 PM",
  ];
  const timelinesTop = [];

  const addNewEventRefs = (ref) => {
    newEventsRef.current = ref;
  };

  const addRef = (ref, index) => (timelineRef.current[index] = ref);

  const handleTouchInTime = (event, index) => {
    setStartTime(event._targetInst.memoizedProps.accessibilityLabel);
    from = event._targetInst.memoizedProps.accessibilityLabel;
    event.target.measure((x, y, width, elHeight, px, py) => {
      startY = y;
      setEvents(() => [
        <View
          style={{
            backgroundColor: "#1D7BE9",
            position: "absolute",
            top: y,
            width: width,
            height: elHeight,
            borderRadius: 2,
            marginLeft: 3,
          }}
          pointerEvents="none"
          ref={(ref) => addNewEventRefs(ref)}
        >
          <Text style={{ color: "white" }}>{from}</Text>
        </View>,
      ]);
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 0 && newEventsRef.current !== null) {
          const el: any = newEventsRef.current;
          el.measure((x, y, width, elHeight, pageX, pageY) => {
            el.setNativeProps({
              style: {
                height: gestureState.dy,
              },
            });
          });
        }
      },
      onPanResponderEnd: (event: any, gestureState) => {
        const end = gestureState.dy + Math.round(startY);
        let prevY = 0;
        const targetIndex = Object.values(timelineRef.current).find(
          (element: any, index) => {
            return element.measure((x, y, width, elHeight, pageX, pageY) => {
              if (end > prevY && end < parseInt(y)) {
                prevY = y;
                newEventsRef.current.measure(
                  (x, y, width, elHeight, px, py) => {
                    setEvents(() => {
                      setEndTime(
                        timelineRef.current[index - 1]
                          ._internalFiberInstanceHandleDEV.memoizedProps
                          .accessibilityLabel
                      );
                      to =
                        timelineRef.current[index - 1]
                          ._internalFiberInstanceHandleDEV.memoizedProps
                          .accessibilityLabel;

                      return [
                        <View
                          style={{
                            backgroundColor: "#1D7BE9",
                            position: "absolute",
                            top: y,
                            width: width,
                            height: elHeight,
                            borderRadius: 2,
                            marginLeft: 3,
                          }}
                          pointerEvents="none"
                          ref={(ref) => addNewEventRefs(ref)}
                          className="flex-row"
                        >
                          <Text style={{ color: "white" }}>{from}</Text>
                          <Text style={{ color: "white" }}> - </Text>
                          <Text style={{ color: "white" }}>{to}</Text>
                        </View>,
                      ];
                    });
                  }
                );
              }
            });
          }
        );
        bottomSheetRef.current.expand();
      },
    })
  ).current;

  const snapPoints = useMemo(() => ["1", "70%"], []);

  const setEventType = (eventType) => {
    switch (eventType) {
      case "Appointment":
        return setSelectEvent("Appointment");
      case "Reminder":
        return setSelectEvent("Reminder");
      case "Event":
        return setSelectEvent("Event");
    }
  };

  const getHour = (hour) =>
    hour.length === 8
      ? dayjs(hour, "h:mm A").format("HH:mm:ss")
      : dayjs(hour, "h A").format("HH:mm:ss");

  const addEvent = () => {
    dispatch(
      addNewEvent({
        title,
        type: selectedEvent,
        day: dayjs().toISOString(),
        from: dayjs(day).toISOString().slice(0, 11) + getHour(startTime),
        to: dayjs(day).toISOString().slice(0, 11) + getHour(endTime),
      })
    );
    props.navigation.navigate(routes.monthCalendar);
  };

  return (
    <View className="flex-1 px-5" style={{ backgroundColor: "white" }}>
      <CalendarHeader handleToday={() => setDay(dayjs())}>
        <TouchableOpacity
          onPress={() => setDay((prev) => prev.subtract(1, "day"))}
        >
          <ChevLeftIcon />
        </TouchableOpacity>
        <Text className="font-bold text-center" style={{ fontSize: 20 }}>
          {day.format("ddd, DD MMMM")}
        </Text>
        <TouchableOpacity onPress={() => setDay((prev) => prev.add(1, "day"))}>
          <ChevRightIcon />
        </TouchableOpacity>
      </CalendarHeader>
      <View className="pt-3 flex-1">
        <View className="flex-row" style={{ width: "100%" }}>
          <View style={styles.hoursContainer}>
            {HOURS.map((time, index) => {
              return (
                <View
                  style={[
                    styles.hours,
                    { height: height / 125 },
                    time.length < 7 && styles.underline,
                  ]}
                  key={index}
                >
                  {time.length < 7 && (
                    <Text style={styles.textTime}>{time}</Text>
                  )}
                </View>
              );
            })}
          </View>
          <View
            style={styles.timeline}
            pointerEvents="auto"
            {...panResponder.panHandlers}
          >
            {HOURS.map((time, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPressIn={(e) => handleTouchInTime(e, index)}
                >
                  <View
                    style={[
                      { height: height / 125 },
                      time.length < 7 && styles.underline,
                    ]}
                    testID={time}
                    accessibilityLabel={time}
                    ref={(ref) => addRef(ref, index)}
                  ></View>
                </TouchableWithoutFeedback>
              );
            })}
            {events.map((eventEl, i) => {
              return (
                <View key={i} style={{ position: "absolute" }}>
                  {eventEl}
                </View>
              );
            })}
          </View>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          backgroundStyle={{
            backgroundColor: "white",
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
          }}
        >
          <View className="m-5 flex-1" style={{ backgroundColor: "white" }}>
            <BaseTextField
              label="Title"
              onChange={(value) => setTitle(value)}
            />
            <View className="flex-row justify-between pt-5 gap-5">
              <TouchableOpacity
                onPress={() => setEventType("Appointment")}
                className="flex-1 items-center gap-2"
              >
                <View
                  style={[
                    styles.eventType,
                    { backgroundColor: "#04D056" },
                    selectedEvent === "Appointment" && styles.seletedEvent,
                  ]}
                ></View>
                <Text className="text-start" style={{ fontSize: 12 }}>
                  Appointment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setEventType("Reminder")}
                className="flex-1 items-center gap-2"
              >
                <View
                  style={[
                    styles.eventType,
                    { backgroundColor: "#1D7BE9" },
                    selectedEvent === "Reminder" && styles.seletedEvent,
                  ]}
                ></View>
                <Text className="text-start" style={{ fontSize: 12 }}>
                  Reminder
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setEventType("Event")}
                className="flex-1 items-center gap-2"
              >
                <View
                  style={[
                    styles.eventType,
                    { backgroundColor: "#FF5F00" },
                    selectedEvent === "Event" && styles.seletedEvent,
                  ]}
                ></View>
                <Text className="text-start" style={{ fontSize: 12 }}>
                  Event
                </Text>
              </TouchableOpacity>
            </View>
            <BaseButton btnStyle={{ marginTop: "auto" }} pressHandle={addEvent}>
              <Text style={{ color: "white" }}>Save</Text>
            </BaseButton>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

export default CalendarDayScreen;

const styles = StyleSheet.create({
  hoursContainer: {
    width: "7%",
  },
  hours: {
    borderRightColor: "#BFBCBC",
    borderRightWidth: 0.5,
    borderStyle: "solid",
  },
  timeline: {
    width: "93%",
  },
  underline: {
    borderBottomColor: "#BFBCBC",
    borderBottomWidth: 0.5,
    borderStyle: "solid",
  },
  textTime: {
    fontSize: 8,
    color: "#BFBCBC",
    bottom: 2,
  },
  eventType: {
    width: 30,
    height: 30,
    borderRadius: 25,
    opacity: 0.3,
  },
  seletedEvent: {
    opacity: 1,
  },
});
