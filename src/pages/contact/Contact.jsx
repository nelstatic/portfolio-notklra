import React from "react";

const Contact = () => {
  return (
    <section>
      <h1>Contact</h1>
      <article className="p-10">
        <p className="font-semibold tracking-[1px] text-[33px]">
          Paris based.
          <br /> Any inquiries :
          <a className="font-normal" href="mailto:xxx@outlook.com">
            {" "}
            notklra@outlook.com
          </a>
        </p>
      </article>
    </section>
  );
};

export default Contact;
