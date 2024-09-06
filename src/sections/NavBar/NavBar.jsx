import React, { useState, useRef } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import top_icon from "../../assets/up_arrow.png"; // Add an icon for the button

const Navbar = () => {
  const [menu, setMenu] = useState("hero");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#hero">
            <p onClick={() => setMenu("hero")}>About Me</p>
          </AnchorLink>
          {menu === "hero" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Portfolio</p>
          </AnchorLink>
          {menu === "projects" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
          {menu === "skills" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <button className="back-to-top" onClick={scrollToTop}>
        <img src={top_icon} alt="Back to Top" />
      </button>
    </div>
  );
};

export default Navbar;
