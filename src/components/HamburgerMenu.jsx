/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LanguageSelect from './LanguageSelect';

const HamburgerMenuBox = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  /* width: calc(100% - 310px); */
  /* height: 400px; */
  height: 100vh;
  margin-top: 75px;
  /* margin-top: 150px; */
  /* left: 130px; */
  /* right: 180px; */
  background-color: white;
  /* border-top: 2px solid #3E522D; */
  z-index: 999;
  transition: border 0.6s ease 0s, background-color 0.6s ease 0s, color 0.6s ease 0s;
  /* box-shadow: 0px 6px 6px rgba(0,0,0,0.8); */
`;

// &:hover {
//   border: solid #582399 2px;
//   background-color: #582399;
//   /* border: solid #7442b3 2px;
//   background-color: #7442b3; */
//   /* border: solid #693ba3 2px;
//   background-color: #693ba3; */
//   /* color: #582399; */
//   color: white;
// }

const HamburgerMenuGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 8fr 0.5fr;
  grid-template-rows: 25px 75px 25px repeat(3, 60px) 75px 25px;
  /* grid-template-areas: ". x x x x x x x x ."
                         ". x x x x x x x x ."
                         ". x x x x x . . . ."
                         ". x x x x . . . . ."
                         ". x x x x . . . . ."
                         ". x x x x . . . . ."
                         ". x x x x . . . . ."
                         ". x x x x . . . . ."
                         ". x . . . . . . . ."
                         ". x . . . . . . . ." */
  place-items: center;
  width: 100%;
  height: 100%;
`;

const SearchBar = styled.div`
  /* grid-area: searchbar; */
  height: 50%;
  place-self: center;
  width: 100%;
  min-width: 252px;
  text-align: center;
  /* border: 1px dashed red; */
  /* position: relative; */

  @media (min-width: 991px) {
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

const NavLink1 = styled.div`
  /* color: #3E522D; */
  /* grid-area: navlink1; */
  border-bottom: 1px solid #3E522D;
  border-top: 1px solid #3E522D;
  font-weight: 600;
  height: 100%
  width: 100%;
  text-align: left;
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

  @media (min-width: 991px) {
    display: none;
  }
`;
const NavLink2 = styled.div`
  /* color: #3E522D; */
  /* grid-area: navlink2; */
  border-bottom: 1px solid #3E522D;
  font-weight: 600;
  height: 100%
  width: 100%;
  text-align: left;
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

  @media (min-width: 991px) {
    display: none;
  }
`;

const NavLink3 = styled.div`
  /* color: #3E522D; */
  /* grid-area: navlink3; */
  border-bottom: 1px solid #3E522D;
  font-weight: 600;
  height: 100%
  width: 100%;
  text-align: left;
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

  @media (min-width: 991px) {
    display: none;
  }
`;

const BorderTop = styled.div`
  border-top: 1px solid #3E522D;
  width: 100%;
  height: 100%;
`;

const HamburgerMenuFade = styled.div`
  position: absolute;
  top: 475px;
  /* top: 75; */
  left: 0;
  bottom: 0;
  right: 0;
  height: 2153px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 998;
`;

// const ModalNationLink = styled(Link)`
//   color: black;
//   font-size: 18px;
//   font-weight: 600;
//   justify-self: left;
//   margin-left: 30%;
//   text-decoration: none;
//   transition: color 0.1s ease 0, font-size 0.1s ease 0, text-shadow 0.1s ease 0;
//   &:hover {
//     color: #3E522D;
//     cursor: pointer;
//     font-size: 19px;
//
//
//     -webkit-transition: all .5s;
//     -moz-transition: all .5s;
//     -o-transition: all .5s;
//   }
// `;
//
// const ModalStateLink = styled(Link)`
//   color: black;
//   font-size: 13px;
//   justify-self: left;
//   margin-left: 30%;
//   text-decoration: none;
//   transition: color 0.4s ease 0, font-size 0.8s ease 0.5s, font-weight ease 0.4s 0;
//   &:hover {
//     color: #3E522D;
//     cursor: pointer;
//     font-size: 15px;
//     font-weight: 600;
//   }
// `;

const HamburgerMenu = ({ content, toggleHamburgerMenu, toggleLanguage }) => {

  // const back = e => {
  //   // e.stopPropagation();
  //   // history.goBack();
  //   alert('You clicked me!');
  // };
  const { NAVIGATE, ABOUT, CONTACT, SEARCH_PLACEHOLDER } = content;

  return (
    <div>
      <HamburgerMenuBox>
        <HamburgerMenuGrid>
          <div />
          <div />
          <div />

          <div />
          <SearchBar>
            <SearchBarInput placeholder={SEARCH_PLACEHOLDER} type="text" />
            <SearchBarButton>
              <i className="fa fa-search" />
            </SearchBarButton>
          </SearchBar>
          <div />

          <div />
          <div />
          <div />

          <div />
          <NavLink1>{ABOUT}</NavLink1>
          <div />

          <div />
          <NavLink2>{NAVIGATE}</NavLink2>
          <div />

          <div />
          <NavLink3>{CONTACT}</NavLink3>
          <div />

          <div />
          <LanguageSelect toggleLanguage={toggleLanguage} />
          <div />

          <div />
          <div />
          <div />
        </HamburgerMenuGrid>
      </HamburgerMenuBox>
      <HamburgerMenuFade onClick={toggleHamburgerMenu} />
    </div>
  );
};

export default HamburgerMenu;

// class HamburgerMenu extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showModal: false,
//     };
//   }
//
//   render() {
// const showModal = this.state.showModal ? <HamburgerMenuBox /> : null;
//
//     return (
//       {showModal}
//     );
//   }
// }
