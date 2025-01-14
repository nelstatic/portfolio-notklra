function Footer() {
  /* const basePath = import.meta.env.VITE_APP_BASE_PATH || "/portfolio-notklra/"; */
  return (
    <footer className="bg-[#d9d9d9] py-[25px] px-[25px] pb-[55px] text-black">
      <div className="flex justify-between items-center py-[40px] pr-[20px]">
        <a
          className="font-semibold text-black text-[22px]"
          href="mailto:xxx@outlook.com"
        >
          {" "}
          notklra@outlook.com
        </a>
        <div className="flex items-center gap-[5px]">
          <a href="#" className="text-black text-[26px] font-semibold">
            <img
              className="w-[30px] object-cover py-[4px] "
              /* src={`${basePath}assets/logos/tiktok.svg`} */
              src="assets/logos/tiktok.svg"
              alt=""
            />
          </a>
          <a href="#" className="text-black text-[26px] font-semibold">
            <img
              className="w-[40px] object-cover"
              /* src={`${basePath}assets/logos/soundcloud.svg`} */
              src="assets/logos/soundcloud.svg"
              alt=""
            />
          </a>
          <a href="#" className="text-black text-[26px] font-semibold">
            <img
              className="w-[30px] object-cover"
              /* src={`${basePath}assets/logos/twitter.png`} */
              src="assets/logos/twitter.png"
              alt=""
            />
          </a>
          <a href="#" className="text-black text-[26px] font-semibold">
            <img
              className="w-[30px] object-cover"
              /* src={`${basePath}assets/logos/instagram.png`} */
              src="assets/logos/instagram.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <p className="text-[26px] font-light">
        Copyright © 2024 All rights reserved. Clara Thion Moreira
      </p>
    </footer>
  );
}

export default Footer;
