const CardInfo = ({ id, title, description, year }) => {
  return (
    <div className="max-w-[75%] border-b-[3px] border-b-[white] border-solid md:mb-10">
      <div className="pb-[0px] pb-[15px] md:pt-[30px] md:pb-[30px] pl-[10px] md:pl-[30px] tracking-wider flex flex-col gap-[0px] md:gap-[10px]">
        <h3 className="text-[23px] md:text-[43px] font-semibold">{title}</h3>
        <p className="text-[20px] md:text-[36px] font-normal">{description}</p>
        <p className="text-[18px] md:text-[30px] font-light">{year}</p>
      </div>
    </div>
  );
};
export default CardInfo;
