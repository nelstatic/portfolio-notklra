import React from "react";
import Fullmediumdatas from "@/data/fullmediumdata.json";
import CardInfo from "@components/card/CardInfo";
import CardGallery from "@components/card/CardGallery";

const FullMedium = () => {
  return (
    <section>
      <div className="headband">
        <img
          src="/assets/fullmedium/headband_fullmedium.webp"
          alt="Headband"
          className="w-full h-auto"
        />
      </div>

      <h1 className="pt-[80px]">Full Frame & Medium Format</h1>
      <div className="content">
        {Fullmediumdatas.map((Fullmediumdata, index) => (
          <article className="card" key={index}>
            <CardGallery
              media={Fullmediumdata.media}
              row={Fullmediumdata.row}
            />
            <CardInfo
              title={Fullmediumdata.title}
              description={Fullmediumdata.description}
              year={Fullmediumdata.year}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default FullMedium;
