import React from "react";
import { useNavbar } from "@components/NavbarContext";

const Home = () => {
  const { toggleNavbar } = useNavbar();

  return (
    <section className="relative h-[120vh] mb-0 z-50">
      <div className="headband">
        <img
          src="/assets/home/headband_home.webp"
          alt="Headband"
          className="w-full h-auto"
        />
      </div>

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
        <h1 className="pt-[100px]">Clara Thion Moreira</h1>
        <h2
          className="text-white text-[70px] tracking-[1px] mx-auto my-0 font-normal text-center px-0 py-[100PX]"
          onClick={toggleNavbar}
        >
          Portfolio
        </h2>
      </div>
    </section>
  );
};

export default Home;
