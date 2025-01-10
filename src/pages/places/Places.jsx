import React from "react";
import Placesdatas from "@/data/placesdata.json";
import CardInfo from "@components/card/card-info/CardInfo";
import CardGallery from "@components/card/card-gallery/CardGallery";

const Places = () => {
  return (
    <section>
      <h1>Places</h1>
      <div className="content">
        {Placesdatas.map((Placesdata, index) => (
          <article className="card" key={index}>
            <CardGallery media={Placesdata.media} row={Placesdata.row} />
            <CardInfo
              title={Placesdata.title}
              description={Placesdata.description}
              year={Placesdata.year}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Places;
