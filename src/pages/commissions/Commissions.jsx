import React from "react";
import Commissionsdatas from "@/data/commissionsdata.json";
import CardInfo from "@components/card/card-info/CardInfo";
import CardGallery from "@components/card/card-gallery/CardGallery";

const Commissions = () => {
  return (
    <section>
      <h1>Commissions</h1>
      <div className="content">
        {Commissionsdatas.map((Commissionsdata, index) => (
          <article className="card" key={index}>
            <CardGallery
              media={Commissionsdata.media}
              row={Commissionsdata.row}
            />
            <CardInfo
              title={Commissionsdata.title}
              description={Commissionsdata.description}
              year={Commissionsdata.year}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Commissions;
