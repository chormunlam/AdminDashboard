import { styled } from "styled-components";
import Logout from "../features/authentication/Logout";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useLocation } from "react-router-dom";
import { useState } from "react";

/* eslint-disable */
const StyledHeader = styled.header`
  display: flex;

  background-color: var(--color-grey-0);

  
  top: 0;

  position: relative;
  width: initial;
  border-bottom: none;
  box-sizing: border-box;

  border-bottom: 3px solid var(--color-grey-100);
`;
// justify-content: space-between;
//align-items: flex-end;
const StyledNav = styled.nav`
  z-index: 9999;
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;

  top: 60px;
  right: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid var(--color-grey-100);
  background-color: var(--color-grey-0);

  @media (min-width: 768px) {
    display: flex;
    background: var(--color-grey-0);

    left: initial;
    top: initial;
    margin: 0 auto auto auto;
    position: relative;
    width: initial;
    border-bottom: none;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function Header() {
  //const {pathname}=useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <Logo />

      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <StyledNav open={menuOpen}>
        <MainNav />
        <Logout />
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
