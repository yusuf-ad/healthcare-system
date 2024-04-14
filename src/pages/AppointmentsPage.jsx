import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { calcMinutes } from "@/utils/calcMinutes";

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
    return <Badge className={"bg-red-600 py-2 px-3"}>cancelled</Badge>;
  } else if (appointment.status === "completed") {
    return <Badge className={"bg-green-600 py-2 px-3"}>completed</Badge>;
  } else {
    return <Badge className={"bg-gray-600 py-2 px-3"}>scheduled</Badge>;
  }
}

function AppointmentsPage() {
  const { appointments } = useSelector((state) => state.appointment);

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-8 xl:px-0 ">
        <h2 className="text-2xl font-bold mb-3">Your appointments</h2>
        <div className="h-[2px] w-full bg-slate-300/50 "></div>

        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Status</TableHead>
                <TableHead className="max-w-max">Doctor</TableHead>
                <TableHead>Department</TableHead>
                <TableHead className="text-right">Date</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="capitalize">
              {appointments.map((appointment) => (
                <TableRow key={appointment.date + appointment.time}>
                  <TableCell>{generateBadge(appointment)}</TableCell>
                  <TableCell className="font-medium min-w-max">
                    {appointment.doctor.split("-").join(" ")}
                  </TableCell>
                  <TableCell>{appointment.department}</TableCell>
                  <TableCell className="text-right">
                    {format(appointment.date, "dd.MM.yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    {appointment.time}
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
