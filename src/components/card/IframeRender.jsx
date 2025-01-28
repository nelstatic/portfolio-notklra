import React, { useState, useEffect } from "react";

const IframeRender = ({ url, title, resetKey }) => {
  const [iframeSrc, setIframeSrc] = useState(url);

  useEffect(() => {
    // Met à jour la source de l'iframe lorsque resetKey change
    setIframeSrc(url);
  }, [resetKey, url]);

  return (
    <iframe
      key={resetKey} // Change de clé pour forcer React à recréer
      width="120%"
      className="h-[200px] md:h-[400px]"
      src={iframeSrc}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default IframeRender;
