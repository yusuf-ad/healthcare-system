import { Link, NavLink } from "react-router-dom";
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
    <div>
      {isFixed && (
        <div className={`h-[${header.current.offsetHeight}px]`}></div>
      )}
      <header
        ref={header}
        className={`${
          isFixed && "fixed"
        } bg-white/80 w-full top-0 flex justify-between items-center py-6 px-16`}
      >
        <div className="font-bold tracking-widest text-lg">TheCure</div>

        <nav className="flex gap-10">
          <ul className="flex gap-5 items-center text-gray-500 font-semibold">
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/staff">Our doctor staff</NavLink>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-100">
              <NavLink to="/communication">Communication</NavLink>
            </li>
          </ul>
          <NavLink to="/appointment">
            <Button className="bg-skin-button-accent hover:bg-skin-button-accent-hover py-6 transition-colors duration-100">
              Book An Appointment
            </Button>
          </NavLink>
        </nav>
      </header>

      <main>
        {/* hero */}
        <section className="bg-hero py-18  px-24 pb-0 ">
          <div className="max-w-7xl  mx-auto max-h-[840px] grid grid-cols-2 overflow-hidden">
            <div className="self-center max-w-[480px] flex flex-col gap-8 items-start ">
              <h1 className="text-5xl text-white font-bold leading-[60px]">
                Book Your Doctor Appointment Online.
              </h1>
              <p className="text-white">
                A Healthier Tomorrow Starts Today: Schedule your Appointment!
                Your Wellness, Our Expertise: Set Your Appointment Today.
              </p>
              <Link to={"/appointment"}>
                <Button className="bg-white text-black py-6 transition-colors duration-100  hover:text-white">
                  Book An Appointment
                </Button>
              </Link>
            </div>
            <div className="self-end">
              <img className="h-3/4" src="./img/hero-doktor.png" alt="" />
            </div>
          </div>
        </section>

        <section className="py-16 px-24 pb-24 bg-slate-100">
          <div className=" mx-auto max-w-7xl">
            <div>
              <h2 className="text-5xl font-bold text-center">How It Works!</h2>
              <p className="max-w-xl mx-auto text-center mt-6">
                Discover, book, and experience personalized healthcare
                effortlessly with our user-friendly Doctor Appointment Website.
              </p>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              <div className="flex justify-between gap-4 items-center ">
                <Link to={"/appointment"}>
                  <div className="flex flex-col items-center gap-4 bg-slate-200 py-8 px-4 group/first rounded-sm">
                    <div className="relative bg-white w-16 h-16 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-user-doctor text-3xl"></i>
                      <div className="-right-2 -top-2 absolute w-5 h-5 text-xs bg-skin-button-accent rounded-full text-white flex items-center justify-center font-bold ">
                        1
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-black font-bold text-xl group-hover/first:underline group-hover/first:text-blue-400 transition-colors duration-100 cursor-pointer">
                        Find A Doctor
                      </h3>
                      <p>
                        Discover skilled doctors based on specialization and
                        location.
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="flex gap-6 self-start mt-14">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>

                <Link to={"/appointment"}>
                  <div className="flex flex-col items-center gap-4 bg-slate-200 py-8 px-4 group/second rounded-sm">
                    <div className="relative bg-white w-16 h-16 rounded-lg flex items-center justify-center">
                      <i className="fa-regular fa-calendar-check text-3xl"></i>
                      <div className="-right-2 -top-2 absolute w-5 h-5 text-xs bg-skin-button-accent rounded-full text-white flex items-center justify-center font-bold">
                        2
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-black font-bold text-xl group-hover/second:underline group-hover/second:text-blue-400 transition-colors duration-100 cursor-pointer">
                        Book Appointment
                      </h3>
                      <p>Effortlessly book appointments at your convenience.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
