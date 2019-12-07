/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LanguageSelect from './LanguageSelect';

import GCFTFLogo from '../assets/logos/GCFTF.png';

const GCFTF_KDB_URL = 'https://www.gcftaskforce-database.org';

const NavBarGrid = styled.div`
  display: grid;
  /* grid-template-columns: 1fr minmax(250px, 4.5fr) minmax(143px, 1.5fr) 1fr 1fr minmax(350px, 3fr); */
  grid-template-columns: 1fr minmax(210px, 4.5fr) minmax(75px, 1.5fr) minmax(auto, auto) auto 100px minmax(280px, 3fr);
  grid-template-areas: 'logo navtitle navlink1 navlink2 navlink3 languageselect searchbar';

  grid-gap: 10px;
  align-items: center;
  background-color: white;
  height: 75px;
  overflow: hidden;
  position: fixed;
  width: 100%;
  min-width: 320px;
  z-index: 999;
  border-bottom: 3px solid #3E522D;

  @media (max-width: 990px) {
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-areas: 'logo navtitle hamburger';
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  grid-area: logo;
  place-self: center;
  background: no-repeat center/100% url(${GCFTFLogo});
  width: 75px;
  height: 75px;
  margin-left: 10px;
  @media (max-width: 990px) {
    margin-left: 38.25px;
  }

  @media (max-width: 765px) {
    margin-left: 5vw
  }
`;

const NavTitle = styled.div`
  /* color: #3E522D; */
  /* color: #692bb5 */
  grid-area: navtitle;
  height: 100%
  font-size: 20px;
  font-weight: 700;
  line-height: 75px;
  text-align: left;
  width: 100%;
  transition: color 0.4s ease 0.05s;
  &:hover {
    color: #582399;
    cursor: pointer;
  }
  @media (max-width: 990px) {
    text-align: center;
  }
`;

const NavLink1 = styled.div`
  /* color: #3E522D; */
  grid-area: navlink1;
  font-weight: 600;
  height: 100%
  width: 100%;
  text-align: right;
  padding: 0 5px;
  line-height: 75px;
  transition: color 0.4s ease 0.05s;
  &:hover {
    color: #582399;
    /* color: #b0cf44; */
    /* color: #c2e645; */
    /* color: #bfe639; */
    /* color: #b5db37; */
    cursor: pointer;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const NavLink2 = styled.div`
  /* color: #3E522D; */
  grid-area: navlink2;
  font-weight: 600;
  height: 100%
  width: 100%;
  text-align: right;
  padding: 0 5px;
  line-height: 75px;
  transition: color 0.4s ease 0.05s;
  &:hover {
    color: #582399;
    /* color: #b0cf44; */
    /* color: #c2e645; */
    /* color: #bfe639; */
    /* color: #b5db37; */
    cursor: pointer;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const NavLink3 = styled.div`
  /* color: #3E522D; */
  grid-area: navlink3;
  font-weight: 600;
  height: 100%
  width: 100%;
  text-align: right;
  padding: 0 5px;
  line-height: 75px;
  transition: color 0.4s ease 0.05s;
  &:hover {
    color: #582399;
    /* color: #b0cf44; */
    /* color: #c2e645; */
    /* color: #bfe639; */
    /* color: #b5db37; */
    cursor: pointer;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const SearchBar = styled.div`
  grid-area: searchbar;
  height: 50%;
  place-self: center;
  width: 90%;
  min-width: 252px;
  /* border: 1px dashed red; */
  /* position: relative; */

  @media (max-width: 990px) {
    display: none;
  }
`;

const SearchBarInput = styled.input`
  height: 100%;
  width: 84%;
  /* width: calc(100% - 40px); */
  min-width: 208px;
  border: 3px solid #3E522D;
  border-right: none;
  padding: 5px;
  /* padding-right: 40px; */
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
  &:focus {
    /* color: #76B945; */
    color: #3E522D;
  }
`;

const SearchBarButton = styled.button`
  width: 40px;
  height: 37.775px;
  border: 1px solid #3E522D;
  background: #3E522D;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 14px;
`;

const HamburgerIcon = styled.i`
  grid-area: hamburger
  place-self: center;

  /* color: #3E522D */
  font-size: 36px;
  margin-right: 5vw;
  transition: color 0.4s ease 0.05s;
  width: auto;
  text-align: left;

  &:hover {
    color: #582399;
    cursor: pointer;
  }

  @media (min-width: 991px) {
    display: none;
  }

  @media (max-width: 990px) {
    margin-right: 38.25px;
  }

  @media (max-width: 765px) {
    margin-right: 5vw
  }
`;

const NavBar = ({
  content,
  toggleHamburgerMenu,
  toggleLanguage,
  toggleModal
}) => {
  const { NAVIGATE, ABOUT, CONTACT, SEARCH_PLACEHOLDER } = content;

  return (
    <NavBarGrid>
      <a href={GCFTF_KDB_URL} style={{ placeSelf: 'center' }}>
        <Logo />
      </a>
      <NavTitle onClick={toggleModal}>
        Knowledge Database
      </NavTitle>

      <NavLink1>{ABOUT}</NavLink1>
      <NavLink2>{NAVIGATE}</NavLink2>
      <NavLink3>{CONTACT}</NavLink3>
      <LanguageSelect toggleLanguage={toggleLanguage} />
      <SearchBar>
        <SearchBarInput placeholder={SEARCH_PLACEHOLDER} type="text" />
        <SearchBarButton>
          <i className="fa fa-search" />
        </SearchBarButton>
      </SearchBar>
      <HamburgerIcon className="fas fa-bars" onClick={toggleHamburgerMenu} />
    </NavBarGrid>
  );
};

export default NavBar;
