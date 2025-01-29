import React from "react";

const Music = () => {
  /* const basePath = import.meta.env.VITE_APP_BASE_PATH || "/portfolio-notklra/"; */

  return (
    <section className="music">
      <h1 className="w-[51%] pt-[80px]">Music</h1>
      <article className="presentation">
        <h2 className="w-[55%]">alias KLRA</h2>
        <p className="w-[80%]">
          Cape Verdean DJ, born & raised in North-East Paris, KLRA captivates
          audiences with her unique sound and energetic performances.
          <br />
          <br /> Known for her ability to seamlessly blend genres, she creates
          electrifying sets with brazilian funk, afro-house, gqom & many more.
          <br />
          <br />
          Bringing passion and creativity, KLRA has an undeniable presence in
          her music, making her a free spirit in the Parisian DJ scene.
        </p>
      </article>

      <article className="flex flex-col gap-[20PX] items-center pb-[80PX]">
        <img
          src="assets/music/CYK22SOLOHEAD1.webp"
          className="w-[150px] md:w-[290px]"
          alt="logo klra"
        />
        <iframe
          width="95%"
          height="170"
          className="mx-auto my-0"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1746437844&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </article>

      <article className="pb-[80PX]">
        <h2 className="w-3/4 text-[27px] md:text-[42px] font-semibold mb-10 pl-3 md:pl-5 pr-0 py-[30px] border-b-2 border-b-[white] border-solid">
          They trusted me
        </h2>
        <div className="trusted">
          <div className="trusted-row">
            <img src="assets/music/Logos/RinseLogo.webp" alt="Logo rinse" />
            <img
              src="assets/music/Logos/CitadiumLogo.webp"
              alt="Logo citadium"
            />
          </div>
          <div className="trusted-row">
            <img
              src="assets/music/Logos/LeatherParkLogo.webp"
              alt="Logo leather park"
            />
            <img
              src="assets/music/Logos/MadeExtremeLogo.webp"
              alt="Logo made extreme"
            />
            <img
              src="assets/music/Logos/AntagonistsLogo.webp"
              alt="Logo antagonists"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Music;
