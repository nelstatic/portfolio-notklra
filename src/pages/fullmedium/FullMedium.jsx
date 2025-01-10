import React from "react";
import Fullmediumdatas from "@/data/fullmediumdata.json";
import CardInfo from "@components/card/card-info/CardInfo";
import CardGallery from "@components/card/card-gallery/CardGallery";

const FullMedium = () => {
  return (
    <section>
      <h1>Full Frame & Medium Format</h1>
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
