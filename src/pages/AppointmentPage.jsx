import AppointmentBreadcrumb from "@/components/ui/AppointmentBreadcrumb";
import BookingForm from "@/components/ui/BookingForm";
import ConfirmScreen from "@/components/ui/ConfirmScreen";
import UserInfoForm from "@/components/ui/UserInfoForm";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AppointmentPage() {
  const [page, setPage] = useState("1");
  const [currentPage, setCurrentPage] = useState("1");

  const navigate = useNavigate();

  useEffect(() => {
    if (+page === 1) navigate("/healthcare-system/appointment/info");
    if (+page === 2) navigate("/healthcare-system/appointment/book");
    if (+page === 3) navigate("/healthcare-system/appointment/confirm");
  }, [page, navigate]);

  return (
    <section className="py-4 sm:py-6 md:py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center mt-8">
          <AppointmentBreadcrumb setPage={setPage} currentPage={currentPage} />
        </div>

        <div className="mt-12  mx-auto grid lg:grid-cols-2 lg:items-start justify-center  gap-8">
          {(+page === 1 || +page === 2) && (
            <UserInfoForm
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              page={page}
              setPage={setPage}
            />
          )}

          {+page === 2 && (
            <BookingForm
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
        {+page === 3 && <ConfirmScreen />}
      </div>
    </section>
  );
}

export default AppointmentPage;
