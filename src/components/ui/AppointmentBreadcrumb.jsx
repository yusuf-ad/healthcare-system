import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

function AppointmentBreadcrumb({ setPage, currentPage }) {
  const location = useLocation();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem onClick={() => setPage(1)}>
          <Link to={"/healthcare-system/appointment/info"}>
            {location.pathname.includes("info") ||
            location.pathname === "/healthcare-system/appointment" ||
            location.pathname === "/healthcare-system/appointment/" ? (
              <BreadcrumbPage className="text-blue-500 font-bold">
                Your info
              </BreadcrumbPage>
            ) : (
              <BreadcrumbLink>Your info</BreadcrumbLink>
            )}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem
          onClick={() => setPage(2)}
          className={`${+currentPage < 2 && "disabled"}`}
        >
          <Link to={"/healthcare-system/appointment/book"}>
            {location.pathname.includes("book") ? (
              <BreadcrumbPage className="text-blue-500 font-bold">
                Book Appointment
              </BreadcrumbPage>
            ) : (
              <BreadcrumbLink>Book Appointment</BreadcrumbLink>
            )}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem
          className={`${+currentPage < 3 && "disabled"}`}
          isDisabled={true}
          onClick={() => setPage(3)}
        >
          <Link to={"/healthcare-system/appointment/confirm"}>
            {location.pathname.includes("confirm") ? (
              <BreadcrumbPage className="text-blue-500 font-bold">
                Confirm Appointment
              </BreadcrumbPage>
            ) : (
              <BreadcrumbLink>Confirm Appointment</BreadcrumbLink>
            )}
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default AppointmentBreadcrumb;
