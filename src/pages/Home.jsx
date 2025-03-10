import React from "react";
import { useNavbar } from "@hooks/NavbarContext";

const Home = () => {
  const { toggleNavbar } = useNavbar();

  return (
    <section className="relative h-[110vh] mb-0 z-50">
      <video
        src="/assets/home/videohome.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      {/* Filtre sombre */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <h1 className="pt-[50px] ml-[28PX] text-[24px] md:text-[29px] md:pt-[50px]">
          Clara Thion Moreira
        </h1>
        <div className=" mx-auto my-0 h-[60vh] md:h-[45vh] text-center px-0 pt-[100PX] pB-[400PX]">
          <h2
            className="font-custom text-white text-[55px] md:text-[70px] tracking-[1px] font-normal cursor-pointer"
            onClick={toggleNavbar}
          >
            Portfolio
          </h2>
        </div>

        <div className="quick-bio">
          <h3>Artistic Direction + Photography + Music</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
