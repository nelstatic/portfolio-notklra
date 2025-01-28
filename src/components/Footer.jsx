function Footer() {
  return (
    <footer className="bg-[#d9d9d9] pt-[10px] md:pt-[25px] px-[9px] md:px-[25px] pb-[20px] md:pb-[55px] text-black absolute w-full z-0">
      <div className="flex justify-between items-center py-[20px] md:py-[40px] pr-0 md:pr-[20px]">
        <a
          className="font-semibold text-black md:text-[22px] sm:text-[16px]"
          href="mailto:xxx@outlook.com"
        >
          {" "}
          notklra@outlook.com
        </a>
        <div className="flex items-center gap-[5px]">
          <a
            href="https://www.tiktok.com/@notklra333"
            target="_blank"
            className="text-black text-[26px] font-semibold"
          >
            <img
              className="w-[22px] md:w-[30px] object-cover py-[4px] "
              src="assets/home/tiktok.webp"
              alt="logo tiktok"
            />
          </a>
          <a
            href="https://soundcloud.com/notklra"
            target="_blank"
            className="text-black text-[26px] font-semibold"
          >
            <img
              className="w-[40px] object-cover"
              src="assets/home/SoundCloudLogo.webp"
              alt="logo soundcloud"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-black text-[26px] font-semibold"
          >
            <img
              className="w-[30px] object-cover"
              src="assets/home/twitter.webp"
              alt="logo twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/notklra/"
            target="_blank"
            className="text-black text-[26px] font-semibold"
          >
            <img
              className="w-[30px] object-cover"
              src="assets/home/instagram.webp"
              alt="logo instagram"
            />
          </a>
        </div>
      </div>
      <p className="text-[16px] md:text-[22px] font-light">
        Copyright © 2024 All rights reserved. Clara Thion Moreira
      </p>
    </footer>
  );
}

export default Footer;
