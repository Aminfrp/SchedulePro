  const actions = {
    setCalendarType(state,{payload})  {
      state.calendarType = payload.key;
    },
    addNewEvent(state,{payload}){
      state.events = [...state.events, payload];
    }
  }

  export default actions;