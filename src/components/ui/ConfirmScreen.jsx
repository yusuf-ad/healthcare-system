import { useDispatch, useSelector } from "react-redux";
import { Button } from "./button";

import { format } from "date-fns";
import { confirmAppointment } from "@/slices/appointmentSlice";
import { Link, useNavigate } from "react-router-dom";

function ConfirmScreen() {
  const { userInfo, appointment } = useSelector((state) => state.appointment);

  const { name, surname, phone } = userInfo;
  const { department, doctor, date, time } = appointment;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-xl rounded-sm bg-white py-6 px-8 flex flex-col shadow-md">
      <h2 className="text-xl font-bold mb-3">Confirm your Appointment</h2>
      <div className="w-full h-[1px] bg-slate-200 mb-6"></div>

      <table className="w-full border-spacing-1 border-separate">
        <thead className="text-left text-black font-bold ">
          <tr>
            <th>Fullname</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-left text-slate-500 capitalize">
          <tr>
            <td>{name + " " + surname} </td>
            <td>{phone} </td>
            <td></td>
          </tr>
        </tbody>
        <thead className="text-left text-black font-bold">
          <tr>
            <th>Department</th>
            <th>Doctor</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-left text-slate-500 capitalize">
          <tr>
            <td>{department} </td>
            <td>{doctor} </td>
            <td></td>
          </tr>
        </tbody>
        <thead className="text-left text-black font-bold">
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-left text-slate-500">
          <tr>
            <td>{format(date, "dd.MM.yyyy")}</td>
            <td>{time}</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <Button
        asChild
        onClick={() => {
          dispatch(confirmAppointment());
        }}
        className="mt-8 self-end py-6 bg-green-600 hover:bg-green-700"
      >
        <Link to="/healthcare-system/appointments">Confirm Appointment</Link>
      </Button>
    </div>
  );
}

export default ConfirmScreen;
