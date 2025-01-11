import React from "react";
import Exhibitionsdatas from "@/data/exhibitionsdata.json";
import CardInfo from "@components/card/CardInfo";
import CardGallery from "@components/card/CardGallery";
const Exhibitions = () => {
  return (
    <section>
      <h1>Exhibitions</h1>
      <article className="presentation">
        <h2 className="w-[64%]">Clara Thion Moreira</h2>
        <p>
          From North-East of Paris, Clara Thion Moreira is a multidisciplinary
          artist primarly working with film photography.
          <br />
          <br /> Through her vision, Clara unveils a new perception of women in
          her imagery.
          <br /> This is particularly evident in her photo series Conexão, where
          one feels the suffocating heaviness of absence when our other half is
          no longer there.
        </p>
      </article>
      <div className="content">
        {Exhibitionsdatas.map((Exhibitionsdata, index) => (
          <article className="card" key={index}>
            <CardGallery
              media={Exhibitionsdata.media}
              row={Exhibitionsdata.row}
            />
            <CardInfo
              title={Exhibitionsdata.title}
              description={Exhibitionsdata.description}
              year={Exhibitionsdata.year}
            />
          </article>
        ))}
      </div>
    </section>
  );
};
export default Exhibitions;
