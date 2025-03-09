import React, { useRef, useEffect } from "react";

const Music = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const startScrolling = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; // Augmente le décalage horizontal
      }
    };

    const scrollInterval = setInterval(startScrolling, 20); // Répète l'action toutes les 20ms

    return () => clearInterval(scrollInterval); // Nettoie l'intervalle au démontage
  }, []);

  return (
    <section className="music">
      <h1 className="w-[51%] pt-[80px] font-custom">Music</h1>
      <article className="presentation">
        <h2 className="w-[54%]">alias KLRA</h2>
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
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
        >
          {[
            "https://res.cloudinary.com/dyjyzz1n5/image/upload/v1741007410/CYK_-_1_odjbfw.png",
            "https://res.cloudinary.com/dyjyzz1n5/image/upload/v1741007409/CYK_-_2_in727k.png",
            "https://res.cloudinary.com/dyjyzz1n5/image/upload/v1741007408/CYK_-_3_hg6e6q.png",
            "https://res.cloudinary.com/dyjyzz1n5/image/upload/v1741007407/CYK_-_4_um34ao.png",
            "https://res.cloudinary.com/dyjyzz1n5/image/upload/v1741007407/CYK_-_5_pabpue.png",
            "https://res.cloudinary.com/dyjyzz1n5/image/upload/v1741007406/CYK_-_6_jr6lgv.png",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-[150px] md:w-[290px] flex-shrink-0"
              alt={`logo klra ${index + 1}`}
            />
          ))}
        </div>
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
