/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

// import JumbotronBackgroundImage from '../assets/images/Mau-Forest-Kenya-copy.png';
import JumbotronBackgroundImage from '../assets/images/LandingBannerCropped.jpg';

const JumbotronGrid = styled.div`
  display: grid;
  /* grid-area: jumbotron; */
  grid-template-columns: 1fr 1fr;
  background-image: url(${JumbotronBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;
  background-attachment: fixed;
  height: 700.8px;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`;

const JumbotronMiniGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(460px, 11fr) 9fr;
  grid-template-rows: 1fr 2.5fr 2.5fr 1fr;
  /* grid-template-rows: 75px 150px 225px 75px; */
  background-color: rgba(255, 255, 255, 0.75);
  /* align-items: center; */
  padding: 85px 0 85px 0;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    padding-right: 30px;
  }

  @media (max-width: 765px) {
    padding-top: 120px;
    grid-template-columns: 8fr 1fr;
    padding-left: 60px;
  }
`;

const JumbotronBrandText = styled.div`
  /* height: 100%; */
  font-size: 20px;
  font-weight: 700;
  /* line-height: 75px; */
  letter-spacing: 3px;
  padding-left: 30px;
  padding-top: 10px;
  /* text-align: left; */
  align-self: center;
  width: 100%;
  /* border: 1px dashed red; */
  /* color: #582399; */
`;

const JumbotronTitle = styled.div`
  height: 100%
  font-size: 60px;
  font-weight: 900;
  /* line-height: 75px; */
  letter-spacing: 3px;
  padding-left: 30px;
  padding-top: 5px;
  text-align: left;
  width: 100%;
  font-family: 'helvetica';
  font-size: 75px;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
  /* border: 1px dashed red; */
  transition: color 0.4s ease 0.05s;
  &:hover {
    color: #582399;
    cursor: default;
  }
`;

const JumbotronDescription = styled.div`
  height: 100%
  font-size: 16px;
  font-weight: normal;
  /* line-height: 75px; */
  letter-spacing: 1px;
  line-height: 30px;
  padding-left: 30px;
  padding-top: 15px;
  text-align: left;
  width: 100%;
  line-height: 1.8em;
  /* border: 1px dashed red; */
`;

const JumbotronButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 30px 5fr 1fr 5fr;
  place-items: center;
  height: 100%;
  width: 100%;
  /* border: 1px dashed red; */
`;

const JumbotronButton = styled.div`
  background-color: transparent;
  border: solid black 2px;
  border-radius: 0;
  cursor: pointer !important;
  display: flex;
  font-family: 'Avenir Next';
  height: 60%;
  align-items: center;
  justify-content: center;
  transition: border 0.6s ease 0s, background-color 0.6s ease 0s, color 0.6s ease 0s;
  width: 100%;
  &:hover {
    border: solid #582399 2px;
    background-color: #582399;
    /* border: solid #7442b3 2px;
    background-color: #7442b3; */
    /* border: solid #693ba3 2px;
    background-color: #693ba3; */
    /* color: #582399; */
    color: white;
  }
`;

const JumbotronButtonText = styled.span`
  /* transition: color 0.4s ease 0s; */
  /* color: black; */
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 18px;
  font-weight: 700;
  /* transition: color 0.4s ease 0s;
  &:hover {
    color: #582399;
  } */
`;

const Jumbotron = ({ content }) => {
  const { DESCRIPTION, NAVIGATE_DB, GLOBAL_SUMMARY } = content;
  return (
    <JumbotronGrid>
      <div />
      <JumbotronMiniGrid>
        <JumbotronBrandText>
          GOVERNORS' CLIMATE &
          <br />
          FOREST (GCF) TASK FORCE
        </JumbotronBrandText>
        <div />
        <JumbotronTitle>
          Knowledge
          <br />
          Database
        </JumbotronTitle>
        <div />
        <JumbotronDescription>
          {DESCRIPTION}
        </JumbotronDescription>
        <div />
        <JumbotronButtonGrid>
          <div />
          <JumbotronButton>
            <JumbotronButtonText>{NAVIGATE_DB}</JumbotronButtonText>
          </JumbotronButton>
          <div />
          <JumbotronButton>
            <JumbotronButtonText>{GLOBAL_SUMMARY}</JumbotronButtonText>
          </JumbotronButton>
        </JumbotronButtonGrid>
      </JumbotronMiniGrid>
    </JumbotronGrid>
  );
}

export default Jumbotron;
