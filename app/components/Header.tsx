import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [current, setCurrent] = useState('NexWan');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (section: string) => {
    setCurrent(section);
    setIsMenuOpen(false); // Close menu after selection
  };

  return (
    <header className="header flex flex-row w-screen h-12 items-center justify-between fixed shadow-md z-[9999]">
      <div className="flex flex-row items-center space-x-2 w-1/3">
        <Link
          to="main"
          smooth={true}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive('NexWan')}
          className="ml-5 hover:cursor-pointer hover:scale-105 transition-all"
        >
          <div className="header__logo flex flex-row items-center space-x-2">
            <img src="/icon.svg" className="w-8" alt="Logo" />
            <h1 className="header__title">NexWan</h1>
          </div>
        </Link>
      </div>
      <div className="text-center items-center justify-center w-1/3">
        <h1 className="text-xl text-center">{current}</h1>
      </div>
      <nav className="flex items-end justify-end mr-5 w-1/3">
        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden flex flex-col items-center justify-center hover:cursor-pointer h-12"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {/* Navigation Links */}
        <ul
          className={`header__nav-list flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10 absolute lg:static top-12 right-0 px-6 main-bg z-[9999] items-center justify-center md:h-12 h-screen !md:bg-transparent w-screen lg:w-auto transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          }`}
        >
          {['About', 'Projects', 'Skills', 'Contact'].map((section) => (
            <li key={section} className="hover:scale-105">
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-xl"
                onSetActive={() => handleSetActive(section)}
                className="hover:cursor-pointer transition-all"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
