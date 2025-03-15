import React from "react";
import { Link } from "react-scroll";


const Header = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [current, setCurrent] = React.useState('NexWan');
    return (
        <header className="header flex flex-row w-screen h-12 items-center justify-between fixed">
          <div className="flex flex-row items-center space-x-2 w-1/3">
            <Link to="main" smooth={true} duration={500} spy={true} onSetActive={() => setCurrent("NexWan")} className={`ml-5 hover:cursor-pointer hover:scale-105 transition-all ${isActive ? 'scale-105' : ''}`}>
              <div className="header__logo flex flex-row items-center space-x-2 hover:cursor-pointer hover:scale-105 transition-all">
                  <img src="/icon.svg" className="w-8" alt="Logo" />
                  <h1 className="header__title">NexWan</h1>
              </div>
            </Link>
          </div>
          <div className="text-center items-center justify-center w-1/3">
          <h1 className="text-xl text-center">{current}</h1>
          </div>
            <nav className="flex items-end justify-end mr-5 w-1/3">
                <ul className="header__nav-list flex flex-row justify-end items-end space-x-10">
                    <li className="hover:scale-105">
                      <Link to="about" smooth={true} className={`hover:cursor-pointer transition-all`} duration={500} spy={true} activeClass="text-xl" onSetActive={() => {setCurrent("About"); console.log('About')}}>
                        About
                      </Link>
                    </li>
                    <li className="hover:scale-105 ">
                        <Link to="projects" smooth={true} duration={500} activeClass="!text-red text-xl" spy={true} onSetInactive={() => { setIsActive(false)}} onSetActive={() => setCurrent("Projects")} className={`hover:cursor-pointer hover:scale-105 transition-all`}>Projects</Link>
                    </li>
                    <li className="hover:scale-105 ">
                        <a href="#contact" className="header__nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;