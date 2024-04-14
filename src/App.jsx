import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isFixed, setIsFixed] = useState(false);
  const header = useRef();

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 45) {
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
          isFixed && "fixed"
        } bg-white/80 w-full top-0 flex justify-between items-center py-6 px-16`}
      >
        <Link to="/">
          <div className="font-bold tracking-widest text-lg">TheCure</div>
        </Link>

        <nav className="flex gap-10">
          <ul className="flex gap-5 items-center text-gray-500 font-semibold">
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/staff">Our doctor staff</NavLink>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/communication">Communication</NavLink>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/appointments">Appointments</NavLink>
            </li>
          </ul>
          <NavLink to="/appointment">
            <Button className="bg-skin-button-accent hover:bg-skin-button-accent-hover py-6 transition-colors duration-100">
              Book An Appointment
            </Button>
          </NavLink>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default App;
