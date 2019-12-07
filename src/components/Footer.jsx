/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LanguageSelect from './LanguageSelect';

import CIFORLogo from '../assets/logos/CIFOR.png';
import EIILogo from '../assets/logos/EII.png';
import GFWLogo from '../assets/logos/GFW.png';
import MDALogo from '../assets/logos/MDA.png';
import NORADLogo from '../assets/logos/NORAD.png';
import PNSLogo from '../assets/logos/PNS.png';
import RBFLogo from '../assets/logos/RBF.png';
import TCGLogo from '../assets/logos/TCG.png';

const FACEBOOK_URL = 'https://www.facebook.com/gcf.taskforce';
const CIFOR_URL = 'https://www.cifor.org';
const EII_URL = 'https://www.earthinnovation.org';
const GCFTF_URL = 'https://www.gcftf.org';
const GCFTF_KDB_URL = 'https://www.gcftaskforce-database.org';
const GFW_URL = 'https://www.globalforestwatch.org';
const INSTAGRAM_URL = 'https://www.instagram.com/gcftaskforce/';
const MDA_URL = 'https://www.mda.org.pe/';
const NORAD_URL = 'https://norad.no/en/front/';
const PNS_URL = 'http://www.pronatura-sur.org/';
const RBF_URL = 'https://www.rbf.org/';
const TCG_URL = 'https://www.theclimategroup.org';
const TWITTER_URL = 'https://twitter.com/gcftaskforce';
const YOUTUBE_URL = 'https://www.youtube.com/channel/UCI4m4y7gTCa_o75aGBXNOaw';

const FooterGrid = styled.div`
  display: grid;
  /* grid-area: footer; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.5fr 4.5fr 2fr 1fr;
  align-items: center;

  background-color: #3E522D;
  color: white;
  height: 352px;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.5fr 1.5fr 2.5fr 1.5fr 3fr 1.5fr;
    grid-row-gap: 20px;

    grid-template-areas: 'backtomainsite2'
                         'navlistgrid'
                         'socialgrid'
                         'withsupportfrom'
                         'acknowledgementsgrid'
                         'copyright';
    height: 405px;
  }
`;

// const FooterMiniGrid = styled.div`
//   display: grid;
//   grid-template-rows: 2fr 4fr 2.5fr .5fr;
//   align-items: center;
//
//   @media (max-width: 765px) {
//     display: none;
//   }
// `;

const AcknowledgementsGrid = styled.div`
  grid-column: 2/3;
  grid-row: 2/5;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 22px;
  grid-column-gap: 22px;

  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
  align-items: start;
  justify-items: center;
  margin: 0 15px;
  height: 100%;

  @media (max-width: 1025px) {
    /* grid-column: 2/3;
    grid-row: 2/5;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 0; */
  }

  @media (max-width: 765px) {
    grid-area: acknowledgementsgrid;
    grid-row: 5/6;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 1fr 1fr;
    margin: 0 30px;
    grid-column-gap: 15px;
    align-items: start;
  }
`;

const FooterTitle1 = styled.h3`
  margin: 0 15px;

  @media (max-width: 765px) {
    display: none;
  }
`;

const FooterTitle2 = styled.h3`
  margin: 0 15px;

  @media (max-width: 765px) {
    grid-area: withsupportfrom;
    justify-self: center;
    align-self: center;
  }
`;

const FooterNavListGrid = styled.div`
  display: grid;
  /* grid-template-columns: 30px 4fr; */
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 15px;
  margin: 15px;

  @media (max-width: 765px) {
    grid-area: navlistgrid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;
    margin: 0;
  }
`;

const FooterNavListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 30px auto 4fr;
  color: white;
  cursor: pointer;
  transition: color 0.4s ease 0.05s;

  &:hover {
    /* color: #582399; */
    /* color: #b0cf44; */
    /* color: #c2e645; */
    /* color: #bfe639; */
    color: #b5db37;
  }

  @media (max-width: 765px) {
    font-size: 18px;
  }
`;

const FooterSocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto) 50%;
  grid-gap: 15px;
  /* margin: 0 15px 15px 15px; */
  margin-left: 15px;

  @media (max-width: 765px) {
    grid-area: socialgrid
    grid-template-columns: repeat(4, auto);
    justify-items: center;
    margin-left: 0;
    /* margin-right: 15px; */
  }
`;

const Icon = styled.i`
  /* grid-area: logo; */
  place-self: center;
`;

const SocialIcon = styled.i`
  /* grid-area: logo; */
  color: white;
  place-self: start;
  transition: color 0.6s ease 0s;
  &:hover {
    /* color: #c2e645; */
    /* color: #bfe639; */
    color: #b5db37;
  }
`;

const FooterCopyrightText = styled.div`
  grid-row: 4/5;
  align-self: start;
  margin-left: 15px;

  @media (max-width: 765px) {
    grid-area: copyright;
    grid-column: 1/5;
    text-align: center;
    line-height: 50px;
    margin: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    color: #b5db37;
  }
`;

const LogoLink = styled.a`
  width: 115px;
  height: 115px;
  align-self: ${({row}) => row ? 'start' : 'end'};

  @media (max-width: 1025px) {
    height: 115px;
    width: 115px;

  }

  @media (max-width: 765px) {
    height: 50px;
    width: 50px;
    margin-bottom: 0;
  }
`;

const Logo = styled.div`
  /* grid-area: logo; */
  background: ${({ logo }) => `no-repeat center/100% url(${logo}`});
  background-color: white;
  /* border: 2px solid black; */
  height: 115px;
  width: 115px;

  @media (max-width: 1025px) {
    height: 115px;
    width: 115px;
  }

  @media (max-width: 765px) {
    height: 50px;
    width: 50px;
  }
`;

// const AcknowledgementsNote = styled.h5`
//   margin: 0 15px;
// `;

const BackToMainSiteLink = styled.a`
  text-decoration: none;

  @media (max-width: 765px) {
    /* grid-area: backtomainsite; */
    /* grid-column: 1/5; */
    justify-self: center;
    display: none;
  }
`;

const BackToMainSiteLink2 = styled.a`
  display: none;
  text-decoration: none;

  @media (max-width: 765px) {
    grid-area: backtomainsite2;
    /* grid-column: 1/5; */
    justify-self: center;
    line-height: 50px;
    display: initial;
  }
`;

const Footer = ({ content }) => {
  const {
    MORE,
    WITH_SUPPORT_FROM,
    ABOUT,
    SOURCES,
    CONTACTS,
    BACK_TO_MAIN_SITE
  } = content;

  return (
    <FooterGrid>

      <FooterTitle1>{MORE}</FooterTitle1>

      <FooterTitle2>{WITH_SUPPORT_FROM}</FooterTitle2>

      <FooterNavListGrid>
        <FooterNavListItemGrid>
          <Icon className="fas fa-info" />
          <span className="menu-text">{ABOUT}</span>
        </FooterNavListItemGrid>
        <FooterNavListItemGrid>
          <Icon className="far fa-file-pdf" />
          <span className="menu-text">{SOURCES}</span>
        </FooterNavListItemGrid>
        <FooterNavListItemGrid>
          <Icon className="far fa-address-book" />
          <span className="menu-text">{CONTACTS}</span>
        </FooterNavListItemGrid>
        <BackToMainSiteLink href={GCFTF_URL} rel="noopener noreferrer" target="_blank">
          <FooterNavListItemGrid>
            <Icon className="fas fa-home" />
            <span className="menu-text">{BACK_TO_MAIN_SITE}</span>
          </FooterNavListItemGrid>
        </BackToMainSiteLink>
      </FooterNavListGrid>

      <AcknowledgementsGrid>
        <LogoLink href={NORAD_URL} rel="noopener noreferrer" target="_blank" row={0}>
          <Logo logo={NORADLogo} />
        </LogoLink>
        <LogoLink href={RBF_URL} rel="noopener noreferrer" target="_blank" row={0}>
          <Logo logo={RBFLogo} />
        </LogoLink>
        <LogoLink href={CIFOR_URL} rel="noopener noreferrer" target="_blank" row={0}>
          <Logo logo={CIFORLogo} />
        </LogoLink>
        <LogoLink href={GFW_URL} rel="noopener noreferrer" target="_blank" row={0}>
          <Logo logo={GFWLogo} />
        </LogoLink>
        <LogoLink href={PNS_URL} rel="noopener noreferrer" target="_blank" row={1}>
          <Logo logo={PNSLogo} />
        </LogoLink>
        <LogoLink href={MDA_URL} rel="noopener noreferrer" target="_blank" row={1}>
          <Logo logo={MDALogo} />
        </LogoLink>
        <LogoLink href={EII_URL} rel="noopener noreferrer" target="_blank" row={1}>
          <Logo logo={EIILogo} />
        </LogoLink>
        <LogoLink href={TCG_URL} rel="noopener noreferrer" target="_blank" row={1}>
          <Logo logo={TCGLogo} />
        </LogoLink>
      </AcknowledgementsGrid>

      <FooterSocialGrid>
        <a href={FACEBOOK_URL} rel="noopener noreferrer" target="_blank">
          <SocialIcon className="fab fa-facebook-f fa-3x" />
        </a>
        <a href={TWITTER_URL} rel="noopener noreferrer" target="_blank">
          <SocialIcon className="fab fa-twitter fa-3x" />
        </a>
        <a href={INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
          <SocialIcon className="fab fa-instagram fa-3x" />
        </a>
        <a href={YOUTUBE_URL} rel="noopener noreferrer" target="_blank">
          <SocialIcon className="fab fa-youtube fa-3x" />
        </a>
      </FooterSocialGrid>

      <FooterCopyrightText>
        ©Governors' Climate and Forests Task Force, 2019
      </FooterCopyrightText>

      <BackToMainSiteLink2 href={GCFTF_URL} rel="noopener noreferrer" target="_blank">
        <FooterNavListItemGrid>
          <Icon className="fas fa-home" />
          <span className="menu-text">{BACK_TO_MAIN_SITE}</span>
        </FooterNavListItemGrid>
      </BackToMainSiteLink2>

      <div />

    </FooterGrid>
  );
};

export default Footer;

// From 1025px version of LogoLink:
// margin-bottom: ${({ marginBottom }) => marginBottom || 0};
