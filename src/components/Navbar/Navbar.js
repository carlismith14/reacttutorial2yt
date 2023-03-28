import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks, 
  NavItemBtn,
  NavBtnLink
} 
from "./Navbar.elements";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../globalStyles";
import { GlobalStyleComponent } from "styled-components";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] =useState(true);

  const handleClick = () => setClick((prevClick) => !prevClick);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])


  window.addEventListener('resize', showButton)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/"> Home </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services"> Services </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/products">Products</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary> Sign up</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button fontBig primary> Sign up</Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
