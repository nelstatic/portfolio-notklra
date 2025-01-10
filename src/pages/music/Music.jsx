import React from "react";

const Music = () => {
  return (
    <section className="music">
      <h1 className="w-[51%]">Music</h1>
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

      <article>
        {/* <img src="/assets/logos/logoklra.png" alt="Logo KLRA" /> */}
      </article>

      <article className="max-w-[75%]">
        <h2 className="text-[42px] font-semibold mb-10 pl-5 pr-0 py-[30px] border-b-2 border-b-[white] border-solid">
          They trusted me
        </h2>
        <div className="trusted-row1">
          <img src="/assets/logos/rinse.png" alt="Logo rinse" />
        </div>
        <div className="trusted-row2"></div>
      </article>
    </section>
  );
};

export default Music;
