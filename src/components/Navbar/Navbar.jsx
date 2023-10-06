import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";
//satır 12-13 class mantığı nedir ?
//satır 15 ul li mantığı
//href mantığı #
//p__opensans 'lar
//clas name araştırması
//<a></a> mantığı

const Navbar = () => (
  <nav className="app__navbar">
    {/* app__navbar oluşturuldu. hemen altta logoya girdik. ama logo app__navbarın
    altında. o yüzden app__navbar-logo. örneğin altta
    navbarın içine smallscreen açtık, smallscreenin içine de linksi yapıştırdık.: app__navbar-smallscreen-links */}

    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      {/* <li className="p__opensans"><a href="#home">Home</a></li> */}

      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">
        Log In / Register
      </a>
      <div />
      {/* bir nevi alt satıra geçme ve alan yaratma, üsteki tek (yalnız) div */}
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}} />
      {/* üstte geri arama işlevini kullandık. ARAŞTIR */}
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overlay_close"
          onClick={() => {}}
        />
        <ul className="app__navbar-smallscreen-links">
          {/* <li className="p__opensans"><a href="#home">Home</a></li> */}
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
//dakika 38. ama 34ten başla 55 havada kaldu
export default Navbar;
