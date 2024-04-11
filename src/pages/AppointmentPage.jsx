import BookingForm from "@/components/ui/BookingForm";
import ConfirmScreen from "@/components/ui/ConfirmScreen";
import UserInfoForm from "@/components/ui/UserInfoForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AppointmentPage() {
  const [page, setPage] = useState("1");
  const [currentPage, setCurrentPage] = useState("1");

  const location = useLocation();

  console.log(page);

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mt-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem onClick={() => setPage(1)}>
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

              <BreadcrumbItem
                onClick={() => setPage(2)}
                // className={`${+page < 2 && "disabled"}`}
              >
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

              <BreadcrumbItem
                // className={`${+page < 3 && "disabled"}`}
                isDisabled={true}
                onClick={() => setPage(3)}
              >
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
          {(+page === 1 || +page === 2) && (
            <UserInfoForm page={page} setPage={setPage} />
          )}

          {+page === 2 && <BookingForm page={page} setPage={setPage} />}
        </div>
        {+page === 3 && <ConfirmScreen />}
      </div>
    </section>
  );
}

export default AppointmentPage;
