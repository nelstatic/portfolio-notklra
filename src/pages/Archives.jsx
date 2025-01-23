import React from "react";
import Archivesdatas from "@/data/archivesdata.json";
import CardInfo from "@components/card/CardInfo";
import CardGallery from "@components/card/CardGallery";

const Archives = () => {
  return (
    <section>
      <div className="headband">
        <img
          src="/assets/archives/headband_archives.webp"
          alt="Headband"
          className="w-full h-auto"
        />
      </div>

      <h1 className="pt-[80px]">Archives</h1>
      <div className="content">
        {Archivesdatas.map((Archivesdata, index) => (
          <article className="card" key={index}>
            <CardGallery media={Archivesdata.media} row={Archivesdata.row} />
            <CardInfo
              title={Archivesdata.title}
              description={Archivesdata.description}
              year={Archivesdata.year}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Archives;
