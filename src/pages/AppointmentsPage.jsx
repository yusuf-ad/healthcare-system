import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { calcMinutes } from "@/utils/calcMinutes";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { updateStatus } from "@/slices/appointmentSlice";

function generateBadge(appointment) {
  const appointmentDate = new Date(appointment.date);
  const appointmentTimeInMinutes = calcMinutes(appointment.time);

  appointmentDate.setMinutes(
    appointmentDate.getMinutes() + appointmentTimeInMinutes
  );

  if (
    appointmentDate < new Date(Date.now()) ||
    appointment.status === "cancelled"
  ) {
    return (
      <Badge className={"bg-red-600 hover:bg-red-600 py-2 px-3"}>
        cancelled
      </Badge>
    );
  } else if (appointment.status === "completed") {
    return (
      <Badge className={"bg-green-600 hover:bg-green-600 py-2 px-3"}>
        completed
      </Badge>
    );
  } else {
    return (
      <Badge className={"bg-gray-600 hover:bg-gray-600 py-2 px-3"}>
        scheduled
      </Badge>
    );
  }
}

function AppointmentsPage() {
  const { appointments } = useSelector((state) => state.appointment);

  const dispatch = useDispatch();

  if (appointments.length === 0) {
    return (
      <section className="py-12">
        <div className="max-w-5xl mx-auto font-bold  px-8 xl:px-0">
          <p className="">There is no appointments yet. </p>

          <Button
            className="mt-6 py-6 bg-skin-button-accent hover:bg-skin-button-accent-hover"
            asChild
          >
            <Link to="/healthcare-system/appointment/info">
              Book an appointment Now
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-8 xl:px-0 ">
        <h2 className="text-2xl font-bold mb-3">Your appointments</h2>
        <div className="h-[2px] w-full bg-slate-300/50 "></div>

        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left"></TableHead>
                <TableHead className="text-left">Status</TableHead>
                <TableHead className="text-left">Date</TableHead>
                <TableHead className="text-left">Time</TableHead>
                <TableHead className="max-w-max text-left">Doctor</TableHead>
                <TableHead className="text-left">Department</TableHead>
                <TableHead className="text-right">User</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="capitalize">
              {appointments.map((appointment) => (
                <TableRow key={appointment.date + appointment.time}>
                  <TableCell>
                    {appointment.status === "scheduled" && (
                      <Popover>
                        <PopoverTrigger>
                          <i className="fa-solid fa-ellipsis-vertical text-lg text-slate-800"></i>
                        </PopoverTrigger>
                        <PopoverContent className="absolute -left-4 py-2 pb-4 xs:w-52 w-36 text-sm xs:text-base">
                          <ul>
                            <li
                              onClick={() =>
                                dispatch(
                                  updateStatus({
                                    status: "cancelled",
                                    id: appointment.id,
                                  })
                                )
                              }
                              className="border-b-2 py-3 px-2 hover:text-red-600 cursor-pointer"
                            >
                              Set cancelled
                            </li>
                            <li
                              onClick={() =>
                                dispatch(
                                  updateStatus({
                                    status: "completed",
                                    id: appointment.id,
                                  })
                                )
                              }
                              className="border-b-2 py-3 px-2 hover:text-green-600 cursor-pointer"
                            >
                              Set completed
                            </li>
                          </ul>
                        </PopoverContent>
                      </Popover>
                    )}
                  </TableCell>
                  <TableCell>{generateBadge(appointment)}</TableCell>
                  <TableCell className="text-left">
                    {format(appointment.date, "dd.MM.yyyy")}
                  </TableCell>
                  <TableCell className="text-left">
                    {appointment.time}
                  </TableCell>
                  <TableCell className="font-medium min-w-max text-left">
                    {appointment.doctor.split("-").join(" ")}
                  </TableCell>
                  <TableCell className="text-left">
                    {appointment.department}
                  </TableCell>
                  <TableCell className="text-right">
                    <Popover>
                      <PopoverTrigger>
                        <i className="fa-solid fa-eye text-lg text-slate-800"></i>
                      </PopoverTrigger>
                      <PopoverContent className=" py-2 pb-4 max-w-max absolute -right-4   text-sm xs:text-base">
                        <ul>
                          <li className="border-b-2 py-3 px-2 capitalize">
                            Fullname: {appointment.name} {appointment.surname}
                          </li>
                          <li className="border-b-2 py-3 px-2">
                            Phone: {appointment.phone}
                          </li>
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

export default AppointmentsPage;

// scheduled completed cancelled
