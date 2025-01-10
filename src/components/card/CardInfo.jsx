const CardInfo = ({ id, title, description, year }) => {
  return (
    <div className="max-w-[75%] border-b-2 border-white mb-10">
      <div className="py-3 pl-[30px] tracking-wider flex flex-col gap-[10px]">
        <h3 className="text-[38px] font-semibold">{title}</h3>
        <p className="text-[33px] font-normal">{description}</p>
        <p className="text-[30px] font-light">{year}</p>
      </div>
    </div>
  );
};
export default CardInfo;
