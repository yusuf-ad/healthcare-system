import { createSlice } from "@reduxjs/toolkit";
import generateUniqueId from "generate-unique-id";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {
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

      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    setAppointment: (state, action) => {
      state.appointment = action.payload;
    },
    confirmAppointment: (state) => {
      const newAppointment = {
        ...state.appointment,
        ...state.userInfo,
        status: "scheduled",
        id: generateUniqueId({ length: 4 }),
      };

      state.appointments.push(newAppointment);

      state.appointment = {
        department: "",
        doctor: "",
        date: "",
        time: "",
      };

      localStorage.setItem("appointments", JSON.stringify(state.appointments));
    },
    updateStatus: (state, action) => {
      const { id, status } = action.payload;

      const appointment = state.appointments.find(
        (appointment) => appointment.id === id
      );

      if (appointment) {
        appointment.status = status;

        localStorage.setItem(
          "appointments",
          JSON.stringify(state.appointments)
        );
      }
    },
  },
});

export default appointmentSlice.reducer;

export const { setUserInfo, setAppointment, confirmAppointment, updateStatus } =
  appointmentSlice.actions;
