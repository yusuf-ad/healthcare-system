import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isFixed, setIsFixed] = useState(false);
  const header = useRef();

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 16) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      {isFixed && <div style={{ height: "96px" }}></div>}
      <header
        ref={header}
        className={`${
          isFixed && "sticky"
        } bg-white/80 w-full inset-0 flex justify-between items-center py-6 px-4 sm:px-6  lg:py-6 lg:px-16`}
      >
        <Link to="/healthcare-system/">
          <div className="font-bold tracking-widest text-lg">TheCure</div>
        </Link>

        {/* dekstop nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          <ul className="flex gap-4 items-center text-gray-500 font-semibold">
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/healthcare-system/">Home</NavLink>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/healthcare-system/staff">Our doctor staff</NavLink>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/healthcare-system/communication">
                Communication
              </NavLink>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/healthcare-system/appointments">
                Appointments
              </NavLink>
            </li>
          </ul>
          <NavLink to="/healthcare-system/appointment">
            <Button className="bg-skin-button-accent hover:bg-skin-button-accent-hover py-6 transition-colors duration-100">
              <span className="lg:inline hidden">Book An Appointment</span>
              <span className="lg:hidden inline">New Appointment</span>
            </Button>
          </NavLink>
        </nav>

        {/* mobile nav */}
        <nav className="md:hidden">
          <button className="cursor-pointer">
            <i className="fa-solid fa-bars text-3xl"></i>
          </button>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default App;
