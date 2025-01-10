import React from "react";

const Home = () => {
  return (
    <section>
      <h1>Clara Thion Moreira</h1>
      <div className="flex flex-col gap-5 /*pb-[300PX]*/">
        <img
          src="/assets/logos/rinse.png"
          className="w-[300px] px-0 py-[30px] mx-auto my-0"
          alt=""
        />
        <h2 className="text-[70px] tracking-[1px] mx-auto my-0 font-normal">
          Portfolio
        </h2>
      </div>
    </section>
  );
};

export default Home;
