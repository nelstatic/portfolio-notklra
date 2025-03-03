import React from "react";

const Contact = () => {
  return (
    <section className="h-screen pt-[100PX]">
      <h1 className="font-custom">Contact</h1>
      <article className="pt-[70PX] px-3 md:p-10">
        <p className="font-semibold tracking-[1px] text-[18px] md:text-[33px]">
          Paris based.
          <br /> Any inquiries :
          <a className=" font-normal" href="mailto:xxx@outlook.com">
            {" "}
            notklra@outlook.com
          </a>
        </p>
      </article>
    </section>
  );
};

export default Contact;
