import BookingForm from "@/components/ui/BookingForm";
import UserInfoForm from "@/components/ui/UserInfoForm";
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

  console.log(location.pathname);

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto ">
        <div className="flex justify-center mt-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to={"/appointment/info"}>
                  {location.pathname.includes("info") ||
                  location.pathname === "/appointment" ||
                  location.pathname === "/appointment/" ? (
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

              <BreadcrumbItem>
                <Link to={"/appointment/confirm"}>
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
        </div>

        <div className="mt-12 mx-auto grid grid-cols-2 items-start gap-8">
          <UserInfoForm />

          {location.pathname.includes("book") && <BookingForm />}
        </div>
      </div>
    </section>
  );
}

export default AppointmentPage;
