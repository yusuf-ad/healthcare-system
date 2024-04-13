import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    surname: "",
    phone: "",
  },
  appointment: {
    department: "",
    doctor: "",
    date: "",
    time: "",
  },
  appointments: localStorage.getItem("appointments")
    ? JSON.parse(localStorage.getItem("appointments"))
    : [],
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setAppointment: (state, action) => {
      state.appointment = action.payload;
    },
    confirmAppointment: (state) => {
      const newAppointment = {
        ...state.appointment,
        ...state.userInfo,
      };

      state.appointments.push(newAppointment);

      localStorage.setItem("appointments", JSON.stringify(state.appointments));
    },
  },
});

export default appointmentSlice.reducer;

export const { setUserInfo, setAppointment, confirmAppointment } =
  appointmentSlice.actions;
