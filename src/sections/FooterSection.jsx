import {
  FaLinkedinIn,
  FaWhatsapp,
  FaLine,
  FaGithub,
  FaUpwork,
  FaFacebookF,
} from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="bg-lightblack -mt-1 pt-5 pb-10">
      <div className="footer-layout social-links">
        <div className="h-px bg-primary grow"></div>

        <a href="https://github.com/cma124" target="_blank" className="text-xl">
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/chan-myae-aung/"
          target="_blank"
          className="text-xl"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.upwork.com/freelancers/~01d0a525d33dd409f4?mp_source=share"
          target="_blank"
          className="text-xl"
        >
          <FaUpwork />
        </a>

        <a
          href="https://www.fiverr.com/chanmyae124?public_mode=true"
          target="_blank"
          className="text-xl"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://line.me/ti/p/FjNvTfLvd9"
          target="_blank"
          className="text-xl"
        >
          <FaLine />
        </a>

        <a
          href="https://wa.me/qr/NTJ76IHWSVFXJ1"
          target="_blank"
          className="text-xl"
        >
          <FaWhatsapp />
        </a>

        <div className="h-px bg-primary grow"></div>
      </div>
    </footer>
  );
};

export default FooterSection;
