import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaUpwork, FaFacebookF } from "react-icons/fa6";
import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="layout bg-secondary min-h-screen flex flex-col"
    >
      <header className="navbar-layout">
        <Navbar />
      </header>

      <div className="profile-layout grow">
        <div className="space-y-5 text-center lg:text-start">
          <h1 data-aos="fade-up">
            I'M <span className="profile-name">CHAN MYAE</span>
          </h1>

          <h2 data-aos="fade-up" data-aos-delay="500" className="profile-role">
            Microsoft Power Platform Developer & Web Developer
          </h2>

          <button data-aos="fade-up" data-aos-delay="1500" className="hero-btn">
            <a href="/ChanMyaeAung-Resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </button>

          <button data-aos="fade-up" data-aos-delay="1500" className="hero-btn">
            <Link to="contact" smooth={true} duration={2500} offset={-40}>
              Contact Me
            </Link>
          </button>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex items-stretch justify-center gap-5 xl:gap-7"
        >
          <div className="profile-img-box">
            <img
              src="/Profile.png"
              alt="Site Owner Profile Image"
              className="profile-img"
            />
          </div>

          <div className="social-links hero-social-links">
            <div className="w-0.5 h-20 bg-primary mx-auto"></div>

            <a
              href="https://github.com/cma124"
              target="_blank"
              className="text-xl"
            >
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
