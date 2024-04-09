import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation, Outlet } from "react-router-dom";

function AppointmentPage() {
  const location = useLocation();

  return (
    <section className="py-12">
      <div className="max-w-lg mx-auto ">
        <div className="flex justify-center mt-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to={"/appointment/info"}>
                  {location.pathname === "/appointment/info" ? (
                    <BreadcrumbPage className="text-blue-500 font-bold">
                      Your info
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink>Your info</BreadcrumbLink>
                  )}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <Link to={"/appointment/book"}>
                  {location.pathname === "/appointment/book" ? (
                    <BreadcrumbPage className="text-blue-500 font-bold">
                      Book Appointment
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink>Book Appointment</BreadcrumbLink>
                  )}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <Link to={"/appointment/confirm"}>
                  {location.pathname === "/appointment/confirm" ? (
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
        </div>

        <Outlet />
      </div>
    </section>
  );
}

export default AppointmentPage;
