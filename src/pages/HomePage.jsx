import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      {/* hero */}
      <section className="bg-hero md:py-18 md:px-24 py-8 px-4 pb-0 ">
        <div className="max-w-7xl  mx-auto max-h-[840px] grid grid-cols-2 overflow-hidden ">
          <div className="self-center max-w-[480px] flex flex-col gap-8 py-6 items-start ">
            <h1 className="md:text-5xl text-3xl text-white font-bold md:leading-[60px]">
              Book Your Doctor Appointment Online.
            </h1>
            <p className="text-white text-sm">
              A Healthier Tomorrow Starts Today: Schedule your Appointment! Your
              Wellness, Our Expertise: Set Your Appointment Today.
            </p>
            <Link to={"/healthcare-system/appointment"}>
              <Button className="bg-white text-black py-6 transition-colors duration-100  hover:text-white">
                Book An Appointment
              </Button>
            </Link>
          </div>

          <div className="self-end ">
            <img className="h-3/4" src="./img/hero-doktor.png" alt="" />
          </div>
        </div>
      </section>

      <section className="py-16 px-24 pb-24 ">
        <div className=" mx-auto max-w-7xl">
          <div>
            <h2 className="md:text-5xl text-4xl font-bold text-center">
              How It Works!
            </h2>
            <p className="max-w-xl mx-auto text-center mt-6">
              Discover, book, and experience personalized healthcare
              effortlessly with our user-friendly Doctor Appointment Website.
            </p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:items-center ">
              <Link to={"/healthcare-system/appointment"}>
                <div className="flex flex-col max-w-96 items-center gap-4 bg-slate-200 py-8 px-4 group/first rounded-sm">
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

              <div className="flex flex-col lg:flex-row gap-6  lg:self-start lg:mt-14">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>

              <Link to={"/healthcare-system/appointment"}>
                <div className="flex flex-col max-w-96 items-center gap-4 bg-slate-200 py-8 px-4 group/second rounded-sm">
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
  );
}

export default HomePage;
