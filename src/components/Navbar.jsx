import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const height = document.getElementById("desktop-navbar").offsetHeight;
    if (height) {
      setNavHeight(height);
    }
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav id="desktop-navbar" className="flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={1500}
          offset={-navHeight}
          className="hover:cursor-pointer"
          spy={true}
        >
          <img
            src="/Logo.png"
            alt="C Logo"
            className="aspect-square w-11 border rounded-full hover:cursor-pointer"
          />
        </Link>

        <div className="hidden lg:flex items-center justify-center grow gap-12">
          <Link
            to="about"
            smooth={true}
            duration={1000}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
          >
            About
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={1000}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
          >
            Experience
          </Link>

          <Link
            to="portfolio"
            smooth={true}
            duration={1000}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
          >
            Portfolio
          </Link>

          <Link
            to="certificate"
            smooth={true}
            duration={1000}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
          >
            Certificates
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
          >
            Contact
          </Link>
        </div>

        <button className="text-2xl lg:hidden" onClick={() => setShowNav(true)}>
          <FaBars />
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`mobile-navbar ${
          showNav
            ? "h-screen scale-y-100 opacity-100"
            : "h-0 scale-y-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          <Link
            to="hero"
            smooth={true}
            duration={1500}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
            onClick={() => setShowNav(false)}
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={1500}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
            onClick={() => setShowNav(false)}
          >
            About
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={1500}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
            onClick={() => setShowNav(false)}
          >
            Experience
          </Link>

          <Link
            to="portfolio"
            smooth={true}
            duration={1500}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
            onClick={() => setShowNav(false)}
          >
            Portfolio
          </Link>

          <Link
            to="certificate"
            smooth={true}
            duration={1500}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
            onClick={() => setShowNav(false)}
          >
            Certificates
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={1500}
            offset={-navHeight}
            className="px-2 hover:cursor-pointer"
            activeClass="text-primary"
            spy={true}
            onClick={() => setShowNav(false)}
          >
            Contact
          </Link>
        </div>

        <button
          className="text-2xl absolute right-10 top-12"
          onClick={() => setShowNav(false)}
        >
          <FaX />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
